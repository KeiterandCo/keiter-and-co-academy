import { useMemo, useState } from 'react';

type Card = {
  short: string;
  full: string;
  example: string;
};

const cards: Card[] = [
  {
    short: 'Build for people we know and care about',
    full: 'We build for people we know and care about. The work reflects on us and on our community.',
    example: 'A button label technically works but feels off-tone. You fix it before shipping because the work reflects on real relationships.',
  },
  {
    short: 'Work with AI, not under it',
    full: 'We work with AI. It does not work for us.',
    example: 'Claude drafts copy, then Olivia rewrites any line that would not come out of her mouth in a real conversation.',
  },
  {
    short: 'Humans push go',
    full: 'Agents recommend, build, and automate as far as possible. Humans push go. Always.',
    example: 'Claude prepares a deploy plan and runs checks, but a human approves the final push and publish step.',
  },
  {
    short: 'Stop for legal-adjacent questions',
    full: 'We are not lawyers. When anything feels legally adjacent, stop and verify.',
    example: 'A client asks about image usage rights. You pause, verify licensing terms, and do not guess.',
  },
  {
    short: 'No AI language ever',
    full: 'No AI language, ever. If it would not come out of your mouth in a real conversation, rewrite it.',
    example: 'Replace phrase-heavy copy with plain language that sounds like a real person talking to a neighbor.',
  },
];

export default function PrinciplesFlashcards() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = useMemo(() => cards[index], [index]);

  const next = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const previous = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Principles flashcards</h3>
      <p className="mb-4 text-sm text-stone">Flip each card, then move through all five principles until you can recall them cleanly.</p>

      <div className="rounded border border-stone/25 bg-cream p-4" role="group" aria-label="Standing principle flashcard">
        <p className="text-xs uppercase tracking-wide text-stone">
          Card {index + 1} of {cards.length}
        </p>
        {!flipped ? (
          <p className="mt-2 text-base font-semibold text-off-black">{card.short}</p>
        ) : (
          <div className="mt-2 space-y-2">
            <p className="text-sm font-semibold text-off-black">{card.full}</p>
            <p className="text-sm text-bark">Example: {card.example}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
        >
          {flipped ? 'Show front' : 'Flip card'}
        </button>
        <button
          type="button"
          onClick={previous}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={next}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Next
        </button>
      </div>
    </section>
  );
}
