import { useMemo, useState } from 'react';

type SnapshotForm = {
  month: string;
  traffic: string;
  searchTerms: string;
  aeoSignals: string;
  topPages: string;
  monthlyTask: string;
  openQuestion: string;
};

const initialForm: SnapshotForm = {
  month: '',
  traffic: '',
  searchTerms: '',
  aeoSignals: '',
  topPages: '',
  monthlyTask: '',
  openQuestion: '',
};

function clean(value: string) {
  return value.replace(/[\u2013\u2014]/g, ', ').replace(/\s+/g, ' ').trim();
}

export default function MonthlySnapshotTemplate() {
  const [form, setForm] = useState<SnapshotForm>(initialForm);
  const [copied, setCopied] = useState(false);

  const setField = (key: keyof SnapshotForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const output = useMemo(() => {
    const month = clean(form.month) || '[Month]';
    const traffic = clean(form.traffic) || '[Traffic summary]';
    const terms = clean(form.searchTerms) || '[Search terms summary]';
    const aeo = clean(form.aeoSignals) || '[AEO signal summary]';
    const pages = clean(form.topPages) || '[Top pages summary]';
    const task = clean(form.monthlyTask) || '[Small task completed]';
    const question = clean(form.openQuestion) || '[Open question if any]';

    return `Monthly site snapshot: ${month}\n\nWhat happened\n${traffic}\n\nWhat people searched for\n${terms}\n\nAEO and visibility signals\n${aeo}\n\nTop pages this month\n${pages}\n\nWhat we handled\n${task}\n\nOpen question\n${question}\n\nRecommended next step\nReply with your top priority for next month and we will scope the right next move.`;
  }, [form]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Monthly snapshot template</h3>
      <p className="mb-4 text-sm text-stone">Capture key monthly signals and produce a plain-language client update.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Reporting month
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.month} onChange={(e) => setField('month', e.target.value)} />
        </label>

        <label className="text-sm text-bark">
          Top pages
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.topPages} onChange={(e) => setField('topPages', e.target.value)} />
        </label>
      </div>

      <label className="mt-3 block text-sm text-bark">
        Traffic summary
        <textarea className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2" value={form.traffic} onChange={(e) => setField('traffic', e.target.value)} />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Search terms surfaced
        <textarea className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2" value={form.searchTerms} onChange={(e) => setField('searchTerms', e.target.value)} />
      </label>

      <label className="mt-3 block text-sm text-bark">
        AEO signals
        <textarea className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2" value={form.aeoSignals} onChange={(e) => setField('aeoSignals', e.target.value)} />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Small task completed this month
        <textarea className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2" value={form.monthlyTask} onChange={(e) => setField('monthlyTask', e.target.value)} />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Open question
        <textarea className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2" value={form.openQuestion} onChange={(e) => setField('openQuestion', e.target.value)} />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={copyOutput} className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust">
          Copy monthly snapshot
        </button>
        {copied ? <p className="self-center text-sm text-moss">Copied.</p> : null}
      </div>

      <textarea readOnly value={output} className="mt-4 min-h-64 w-full rounded border border-stone/40 bg-cream px-3 py-2 font-mono text-xs" />
    </section>
  );
}
