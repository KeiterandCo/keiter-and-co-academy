import asyncio
import re
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
MODULES_DIR = ROOT / "src" / "content" / "modules"
TRANSCRIPTS_DIR = ROOT / "src" / "content" / "audio-transcripts"
AUDIO_DIR = ROOT / "public" / "audio"

PLACEHOLDER_MODULES = {
    "how-we-think-07",
    "how-we-think-08",
    "business-15",
    "practice-22",
}

# Warm and clear baseline voice for placeholder narration.
VOICE = "en-US-JennyNeural"
RATE = "+0%"
PITCH = "+0Hz"


def split_front_matter(content: str) -> tuple[str, str]:
    if not content.startswith("---\n"):
        return "", content
    end_idx = content.find("\n---\n", 4)
    if end_idx == -1:
        return "", content
    fm = content[4:end_idx]
    body = content[end_idx + 5 :]
    return fm, body


def normalize_whitespace(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip() + "\n"


def strip_markup_for_transcript(body: str) -> str:
    text = body

    text = re.sub(r"\{\/\*.*?\*\/\}", "", text, flags=re.DOTALL)
    text = re.sub(r"^import\s+.*?$", "", text, flags=re.MULTILINE)

    text = re.sub(
        r"```[\s\S]*?```",
        "\nCode example follows. See the page for the full block.\n",
        text,
    )

    text = re.sub(
        r"<([A-Z][A-Za-z0-9]*)\b[^>]*\/>",
        "\nInteractive component here. Use the live site to try it.\n",
        text,
    )

    text = re.sub(
        r"<div\b[^>]*>[\s\S]*?<\/div>",
        "\nInteractive component here. Use the live site to try it.\n",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(r"</?Callout[^>]*>", "", text)
    text = re.sub(r"</?[A-Za-z][^>]*>", "", text)

    text = re.sub(r"^---\s*$", "", text, flags=re.MULTILINE)
    text = re.sub(r"^#{1,6}\s+", "", text, flags=re.MULTILINE)
    text = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", text)

    text = text.replace("**", "")
    text = text.replace("`", "")
    text = text.replace("\u2014", ",")

    return normalize_whitespace(text)


def upsert_audio_fields(front_matter: str, slug: str) -> str:
    lines = front_matter.split("\n")

    audio_line = f'audioFile: "/audio/{slug}.mp3"'
    transcript_line = f'transcriptFile: "{slug}.md"'

    has_audio = any(line.strip().startswith("audioFile:") for line in lines)
    has_transcript = any(line.strip().startswith("transcriptFile:") for line in lines)

    if has_audio:
        lines = [audio_line if line.strip().startswith("audioFile:") else line for line in lines]
    if has_transcript:
        lines = [transcript_line if line.strip().startswith("transcriptFile:") else line for line in lines]

    if not has_audio or not has_transcript:
        insert_idx = None
        for idx, line in enumerate(lines):
            if line.strip().startswith("interactiveComponent:"):
                insert_idx = idx
                break
        if insert_idx is None:
            insert_idx = len(lines)

        additions = []
        if not has_audio:
            additions.append(audio_line)
        if not has_transcript:
            additions.append(transcript_line)

        lines[insert_idx:insert_idx] = additions

    return "\n".join(lines)


def collect_target_modules() -> list[Path]:
    files = sorted(MODULES_DIR.glob("*.mdx"))
    targets = []
    for path in files:
        slug = path.stem
        if slug in PLACEHOLDER_MODULES:
            continue
        targets.append(path)
    return targets


async def synthesize_audio(slug: str, text: str) -> None:
    out_path = AUDIO_DIR / f"{slug}.mp3"
    communicate = edge_tts.Communicate(text=text, voice=VOICE, rate=RATE, pitch=PITCH)
    await communicate.save(str(out_path))


async def main() -> None:
    TRANSCRIPTS_DIR.mkdir(parents=True, exist_ok=True)
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    targets = collect_target_modules()
    generated = []

    for module_path in targets:
        slug = module_path.stem
        raw = module_path.read_text(encoding="utf-8")
        front_matter, body = split_front_matter(raw)
        if not front_matter:
            print(f"Skipping {slug}: no front matter found")
            continue

        transcript_body = strip_markup_for_transcript(body)

        transcript_text = (
            f"# Transcript: {slug}\n\n"
            "Audio narration placeholder for this module.\n\n"
            f"{transcript_body}"
        )
        transcript_text = transcript_text.replace("\u2014", ",")

        (TRANSCRIPTS_DIR / f"{slug}.md").write_text(transcript_text, encoding="utf-8")

        updated_front_matter = upsert_audio_fields(front_matter, slug)
        module_path.write_text(f"---\n{updated_front_matter}\n---\n{body}", encoding="utf-8")

        await synthesize_audio(slug, transcript_body)
        generated.append(slug)
        print(f"Generated transcript + audio for {slug}")

    total_bytes = sum(p.stat().st_size for p in AUDIO_DIR.glob("*.mp3"))
    print("\nPhase 10 generation complete")
    print(f"Modules with audio: {len(generated)}")
    print(f"Total audio size bytes: {total_bytes}")


if __name__ == "__main__":
    asyncio.run(main())
