import { useEffect, useMemo, useState } from 'react';

type PhaseStatus = 'not-started' | 'in-progress' | 'done';

type PhaseEntry = {
  id: string;
  title: string;
  status: PhaseStatus;
  handoff: string;
};

const defaultPhases: PhaseEntry[] = [
  { id: '1', title: 'Intake and brief', status: 'not-started', handoff: '' },
  { id: '2', title: 'Decision log', status: 'not-started', handoff: '' },
  { id: '3', title: 'Spec', status: 'not-started', handoff: '' },
  { id: '4', title: 'Kickoff', status: 'not-started', handoff: '' },
  { id: '5', title: 'Build', status: 'not-started', handoff: '' },
  { id: '6', title: 'Definition of Done pass', status: 'not-started', handoff: '' },
  { id: '7', title: 'Final handoff', status: 'not-started', handoff: '' },
];

function safeKey(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export default function BuildTracker() {
  const [buildName, setBuildName] = useState('capstone-practice');
  const [phases, setPhases] = useState<PhaseEntry[]>(defaultPhases);

  const storageKey = `academy-build-tracker-${safeKey(buildName)}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      setPhases(defaultPhases);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as PhaseEntry[];
      if (Array.isArray(parsed) && parsed.length === defaultPhases.length) {
        setPhases(parsed);
      } else {
        setPhases(defaultPhases);
      }
    } catch {
      setPhases(defaultPhases);
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, JSON.stringify(phases));
  }, [storageKey, phases]);

  const updatePhase = (id: string, patch: Partial<PhaseEntry>) => {
    setPhases((prev) => prev.map((phase) => (phase.id === id ? { ...phase, ...patch } : phase)));
  };

  const summary = useMemo(() => {
    const done = phases.filter((phase) => phase.status === 'done').length;
    const inProgress = phases.filter((phase) => phase.status === 'in-progress').length;
    const total = phases.length;
    return { done, inProgress, total };
  }, [phases]);

  const copyLog = async () => {
    const lines = [
      `Capstone build tracker: ${buildName}`,
      '',
      ...phases.map((phase) => `${phase.title} | ${phase.status} | ${phase.handoff.replace(/[\u2013\u2014]/g, ', ') || 'No handoff note yet.'}`),
    ];
    await navigator.clipboard.writeText(lines.join('\n'));
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Capstone build tracker</h3>
      <p className="mb-4 text-sm text-stone">Track capstone milestones, log handoff notes, and keep progress in localStorage by build name.</p>

      <label className="mb-4 block text-sm text-bark">
        Build name
        <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2 md:w-96" value={buildName} onChange={(e) => setBuildName(e.target.value)} />
      </label>

      <div className="mb-4 grid gap-3 md:grid-cols-3">
        <div className="rounded border border-stone/25 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Completed</p>
          <p className="text-moss">{summary.done}</p>
        </div>
        <div className="rounded border border-stone/25 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">In progress</p>
          <p className="text-rust">{summary.inProgress}</p>
        </div>
        <div className="rounded border border-stone/25 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Total phases</p>
          <p className="text-bark">{summary.total}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {phases.map((phase) => (
          <li key={phase.id} className="rounded border border-stone/25 bg-cream p-3">
            <p className="text-sm font-semibold text-off-black">{phase.title}</p>
            <label className="mt-2 block text-xs text-bark">
              Status
              <select
                value={phase.status}
                onChange={(e) => updatePhase(phase.id, { status: e.target.value as PhaseStatus })}
                className="ml-2 rounded border border-stone/40 px-2 py-1"
              >
                <option value="not-started">Not started</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
              </select>
            </label>
            <label className="mt-2 block text-xs text-bark">
              Handoff note
              <textarea
                value={phase.handoff}
                onChange={(e) => updatePhase(phase.id, { handoff: e.target.value })}
                className="mt-1 min-h-20 w-full rounded border border-stone/40 px-2 py-1 text-sm"
              />
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <button type="button" onClick={copyLog} className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust">
          Copy tracker log
        </button>
      </div>
    </section>
  );
}
