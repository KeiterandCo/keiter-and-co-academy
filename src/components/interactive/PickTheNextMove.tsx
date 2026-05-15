import { useMemo, useState } from 'react';

type Scenario = {
  id: string;
  title: string;
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  group: 'all' | 'principles';
};

type Props = {
  subset?: 'all' | 'principles';
};

const scenarios: Scenario[] = [
  {
    id: 'off-tier',
    title: 'Client asks for work outside agreed tier',
    context: 'Mid-build, the client asks for a new feature set that changes scope and timeline.',
    options: [
      'Add it now to keep momentum and discuss billing later.',
      'Pause, document the scope change, then propose a scoped adjustment.',
      'Say no without explanation and move on.',
    ],
    correctIndex: 1,
    explanation: 'Documenting and scoping the change protects trust and keeps the build process clean.',
    group: 'all',
  },
  {
    id: 'voice-flat',
    title: 'Homepage copy sounds generic',
    context: 'The draft is clear but does not sound like the client when read out loud.',
    options: [
      'Ship it anyway since the facts are accurate.',
      'Replace with trendier marketing phrasing.',
      'Return to intake language and rewrite in the client\'s natural voice.',
    ],
    correctIndex: 2,
    explanation: 'Keiter voice work starts from how the client actually talks, not generic phrasing.',
    group: 'all',
  },
  {
    id: 'principle-conflict',
    title: 'Client requests manipulative CTA tactics',
    context: 'A client asks for copy that pressures visitors with false urgency.',
    options: [
      'Use the tactic because conversion is the only metric that matters.',
      'Hold the principle, offer honest alternatives, and document the decision.',
      'Delay the decision and hope the request is forgotten.',
    ],
    correctIndex: 1,
    explanation: 'Standing principles are operational limits. Offer alternatives and document why.',
    group: 'principles',
  },
  {
    id: 'contrast-failure',
    title: 'Hero overlay fails contrast checks late',
    context: 'Pre-launch review finds poor text contrast over a new hero image.',
    options: [
      'Adjust contrast now, then re-check all states before launch.',
      'Leave it for a post-launch patch.',
      'Add tiny text-shadow and call it done.',
    ],
    correctIndex: 0,
    explanation: 'Contrast is a build-time quality gate and must pass before launch.',
    group: 'all',
  },
  {
    id: 'legal-adjacent',
    title: 'Unclear image licensing status',
    context: 'A client sends images from unknown sources and asks for immediate upload.',
    options: [
      'Use them and remove later if needed.',
      'Stop and verify licensing before publishing.',
      'Ignore and continue with placeholder text only.',
    ],
    correctIndex: 1,
    explanation: 'Legally adjacent uncertainty requires verification before publish.',
    group: 'principles',
  },
];

export default function PickTheNextMove({ subset = 'all' }: Props) {
  const available = useMemo(
    () => scenarios.filter((scenario) => subset === 'all' || scenario.group === subset),
    [subset],
  );

  const [index, setIndex] = useState(0);
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const scenario = available[index];

  if (!scenario) {
    return null;
  }

  const submit = () => setSubmitted(true);

  const next = () => {
    setAnswerIndex(null);
    setSubmitted(false);
    setIndex((prev) => (prev + 1) % available.length);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Pick the next move</h3>
      <p className="mb-4 text-sm text-stone">Practice scenario decisions against Keiter standards and standing principles.</p>

      <div className="rounded border border-stone/25 bg-cream p-4">
        <p className="text-xs uppercase tracking-wide text-stone">
          Scenario {index + 1} of {available.length}
        </p>
        <p className="mt-2 text-sm font-semibold text-off-black">{scenario.title}</p>
        <p className="mt-2 text-sm text-bark">{scenario.context}</p>

        <fieldset className="mt-3">
          <legend className="text-sm font-semibold text-bark">Your next move</legend>
          <div className="mt-2 space-y-2">
            {scenario.options.map((option, optionIndex) => (
              <label key={option} className="flex items-start gap-2 rounded border border-stone/20 bg-warm-white p-2 text-sm text-bark">
                <input
                  type="radio"
                  name={`scenario-${scenario.id}`}
                  checked={answerIndex === optionIndex}
                  onChange={() => setAnswerIndex(optionIndex)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={submit}
            disabled={answerIndex === null}
            className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust disabled:cursor-not-allowed disabled:opacity-60"
          >
            Check answer
          </button>
          <button
            type="button"
            onClick={next}
            className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
          >
            Next scenario
          </button>
        </div>

        {submitted ? (
          <div className="mt-3 rounded border border-stone/25 bg-warm-white p-3 text-sm">
            <p className="font-semibold text-off-black">
              {answerIndex === scenario.correctIndex ? 'Correct next move.' : 'Not the best move yet.'}
            </p>
            <p className="mt-1 text-bark">{scenario.explanation}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
