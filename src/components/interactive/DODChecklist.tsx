import { useEffect, useMemo, useState } from 'react';

type ItemStatus = 'open' | 'done' | 'deferred';

type ItemState = {
  status: ItemStatus;
  note: string;
};

type Store = Record<string, ItemState>;

type ChecklistItem = {
  id: string;
  category: string;
  text: string;
};

const items: ChecklistItem[] = [
  { id: 'copy-1', category: 'Copy', text: 'No em dashes, contrast framing, engagement bait, or AI language.' },
  { id: 'copy-2', category: 'Copy', text: 'Voice is warm, direct, and unpretentious.' },
  { id: 'a11y-1', category: 'Accessibility', text: 'Semantic HTML is used for structure and controls.' },
  { id: 'a11y-2', category: 'Accessibility', text: 'Focus indicators are visible on all interactive elements.' },
  { id: 'a11y-3', category: 'Accessibility', text: 'Keyboard-only navigation works on every interactive widget.' },
  { id: 'a11y-4', category: 'Accessibility', text: 'Form labels and alt text are complete and descriptive.' },
  { id: 'mobile-1', category: 'Mobile', text: 'Pages look correct at 375px, 768px, and 1280px.' },
  { id: 'mobile-2', category: 'Mobile', text: 'Touch targets are at least 44x44 on mobile.' },
  { id: 'seo-1', category: 'SEO and AEO', text: 'Meta titles and descriptions are in range and answer-focused.' },
  { id: 'seo-2', category: 'SEO and AEO', text: 'Schema blocks are present and valid for page types.' },
  { id: 'seo-3', category: 'SEO and AEO', text: 'OpenGraph and canonical tags are set correctly.' },
  { id: 'polish-1', category: 'Personality and Polish', text: 'Hover and entrance states are present where needed.' },
  { id: 'polish-2', category: 'Personality and Polish', text: 'Color contrast passes on all text and control states.' },
  { id: 'assets-1', category: 'Assets and Infra', text: 'Fonts, favicon, and OG default image are in place.' },
  { id: 'assets-2', category: 'Assets and Infra', text: 'Build notes list every deferred or blocked item.' },
  { id: 'launch-1', category: 'Launch Readiness', text: '404 page, print styles, and final route checks are complete.' },
];

const emptyState = (): Store =>
  Object.fromEntries(items.map((item) => [item.id, { status: 'open' as ItemStatus, note: '' }])) as Store;

function grouped() {
  return items.reduce<Record<string, ChecklistItem[]>>((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function DODChecklist() {
  const [buildName, setBuildName] = useState('academy-practice-build');
  const [store, setStore] = useState<Store>(emptyState());

  const storageKey = `academy-dod-${buildName.trim().toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      setStore(emptyState());
      return;
    }
    try {
      const parsed = JSON.parse(raw) as Store;
      setStore({ ...emptyState(), ...parsed });
    } catch {
      setStore(emptyState());
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(storageKey, JSON.stringify(store));
  }, [storageKey, store]);

  const summary = useMemo(() => {
    const values = Object.values(store);
    const done = values.filter((v) => v.status === 'done').length;
    const deferred = values.filter((v) => v.status === 'deferred').length;
    const open = values.filter((v) => v.status === 'open').length;
    return { done, deferred, open, total: values.length };
  }, [store]);

  const groupedItems = useMemo(() => grouped(), []);

  const updateItem = (id: string, patch: Partial<ItemState>) => {
    setStore((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  };

  const buildReport = () => {
    const lines = [
      `Definition of Done report for: ${buildName}`,
      `Done: ${summary.done}`,
      `Deferred: ${summary.deferred}`,
      `Open: ${summary.open}`,
      '',
      'Items needing follow-up:',
    ];

    for (const item of items) {
      const state = store[item.id];
      if (state.status !== 'done') {
        lines.push(`- [${state.status}] ${item.category}: ${item.text}`);
        if (state.note.trim()) {
          lines.push(`  Note: ${state.note.trim().replace(/[\u2013\u2014]/g, ', ')}`);
        }
      }
    }

    return lines.join('\n');
  };

  const copyReport = async () => {
    await navigator.clipboard.writeText(buildReport());
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-3 text-xl font-semibold text-off-black">Definition of Done checklist</h3>
      <p className="mb-4 text-sm text-stone">Track completion by build name, save notes, mark deferred items, and export your review summary.</p>

      <label className="mb-4 block text-sm text-bark">
        Build name
        <input
          value={buildName}
          onChange={(e) => setBuildName(e.target.value)}
          className="mt-1 w-full rounded border border-stone/40 px-3 py-2 md:w-96"
        />
      </label>

      <div className="mb-4 grid gap-3 md:grid-cols-4">
        <div className="rounded border border-stone/30 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Total</p>
          <p className="text-bark">{summary.total}</p>
        </div>
        <div className="rounded border border-stone/30 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Done</p>
          <p className="text-moss">{summary.done}</p>
        </div>
        <div className="rounded border border-stone/30 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Deferred</p>
          <p className="text-rust">{summary.deferred}</p>
        </div>
        <div className="rounded border border-stone/30 bg-cream px-3 py-2 text-sm">
          <p className="font-semibold text-off-black">Open</p>
          <p className="text-bark">{summary.open}</p>
        </div>
      </div>

      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category} className="mb-5 rounded border border-stone/25 bg-cream p-4">
          <h4 className="mb-3 text-base font-semibold text-off-black">{category}</h4>
          <ul className="space-y-3">
            {categoryItems.map((item) => {
              const state = store[item.id] ?? { status: 'open', note: '' };
              return (
                <li key={item.id} className="rounded border border-stone/20 bg-warm-white p-3">
                  <p className="text-sm font-medium text-bark">{item.text}</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <label className="text-xs text-bark">
                      Status
                      <select
                        value={state.status}
                        onChange={(e) => updateItem(item.id, { status: e.target.value as ItemStatus })}
                        className="ml-2 rounded border border-stone/40 px-2 py-1"
                      >
                        <option value="open">Open</option>
                        <option value="done">Done</option>
                        <option value="deferred">Deferred</option>
                      </select>
                    </label>
                  </div>
                  <label className="mt-2 block text-xs text-bark">
                    Note
                    <textarea
                      value={state.note}
                      onChange={(e) => updateItem(item.id, { note: e.target.value })}
                      className="mt-1 min-h-16 w-full rounded border border-stone/40 px-2 py-1 text-sm"
                    />
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="flex flex-wrap gap-3 no-print">
        <button
          type="button"
          onClick={copyReport}
          className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
        >
          Copy report
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Print report
        </button>
      </div>
    </section>
  );
}
