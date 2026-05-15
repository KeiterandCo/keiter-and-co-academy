import { useMemo, useState } from 'react';

type Step = {
  label: string;
  load: number;
  dropped: string;
};

const singleSession: Step[] = [
  { label: 'Scaffold and shell', load: 20, dropped: 'Nothing dropped yet.' },
  { label: 'Add content models', load: 45, dropped: 'Early shell details getting fuzzy.' },
  { label: 'Write page content', load: 70, dropped: 'Initial design decisions are slipping.' },
  { label: 'Build widgets', load: 90, dropped: 'Older decisions no longer in active context.' },
  { label: 'Final polish pass', load: 100, dropped: 'Drift appears, rework increases.' },
];

const phasedSession: Step[] = [
  { label: 'Phase 1 handoff', load: 35, dropped: 'No loss, bounded session.' },
  { label: 'Phase 2 handoff', load: 40, dropped: 'Only key handoff details carried forward.' },
  { label: 'Phase 3 handoff', load: 38, dropped: 'Fresh context keeps decisions stable.' },
  { label: 'Phase 4 handoff', load: 42, dropped: 'Quality gates catch drift at boundaries.' },
  { label: 'Phase 5 handoff', load: 36, dropped: 'Context stays focused, lower rework.' },
];

export default function ContextWindowVisualizer() {
  const [mode, setMode] = useState<'single' | 'phased'>('single');
  const [stepIndex, setStepIndex] = useState(0);

  const steps = useMemo(() => (mode === 'single' ? singleSession : phasedSession), [mode]);
  const step = steps[stepIndex];

  const next = () => setStepIndex((prev) => (prev + 1) % steps.length);
  const previous = () => setStepIndex((prev) => (prev - 1 + steps.length) % steps.length);

  const switchMode = (nextMode: 'single' | 'phased') => {
    setMode(nextMode);
    setStepIndex(0);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Context window visualizer</h3>
      <p className="mb-4 text-sm text-stone">Compare one long build session against a phased build with handoff notes.</p>

      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Visualizer mode">
        <button
          type="button"
          onClick={() => switchMode('single')}
          className={`min-h-11 rounded px-4 py-2 text-sm font-semibold ${
            mode === 'single' ? 'bg-moss text-cream' : 'border border-moss text-moss hover:bg-moss/10'
          }`}
        >
          Single long session
        </button>
        <button
          type="button"
          onClick={() => switchMode('phased')}
          className={`min-h-11 rounded px-4 py-2 text-sm font-semibold ${
            mode === 'phased' ? 'bg-moss text-cream' : 'border border-moss text-moss hover:bg-moss/10'
          }`}
        >
          Phased sessions
        </button>
      </div>

      <div className="rounded border border-stone/25 bg-cream p-4">
        <p className="text-xs uppercase tracking-wide text-stone">
          Step {stepIndex + 1} of {steps.length}
        </p>
        <p className="mt-2 text-sm font-semibold text-off-black">{step.label}</p>

        <div className="mt-3 h-4 overflow-hidden rounded bg-warm-white" aria-label="Context load bar">
          <div className="h-full bg-rust transition-all duration-300" style={{ width: `${step.load}%` }} />
        </div>

        <p className="mt-2 text-sm text-bark">Active context load: {step.load}%</p>
        <p className="mt-2 text-sm text-stone">{step.dropped}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={previous}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Previous step
        </button>
        <button
          type="button"
          onClick={next}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Next step
        </button>
      </div>
    </section>
  );
}
