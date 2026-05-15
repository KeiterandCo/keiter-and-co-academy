import { useMemo, useState } from 'react';

type FormState = {
  clientName: string;
  buildSummary: string;
  tier: string;
  carePlan: string;
  depositAmount: string;
  balanceDue: string;
  goLiveTarget: string;
};

const initialState: FormState = {
  clientName: '',
  buildSummary: '',
  tier: 'Standard',
  carePlan: 'Core',
  depositAmount: '',
  balanceDue: '',
  goLiveTarget: '',
};

function clean(value: string) {
  return value.replace(/[\u2013\u2014]/g, ', ').replace(/\s+/g, ' ').trim();
}

export default function ProposalTemplate() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);

  const setField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const output = useMemo(() => {
    const clientName = clean(form.clientName) || '[Client name]';
    const buildSummary = clean(form.buildSummary) || '[Build summary from intake]';
    const tier = clean(form.tier) || 'Standard';
    const carePlan = clean(form.carePlan) || '[Care Plan choice]';
    const deposit = clean(form.depositAmount) || '[Deposit amount]';
    const balance = clean(form.balanceDue) || '[Balance due]';
    const goLive = clean(form.goLiveTarget) || '[Go-live target]';

    return `${clientName} | Keiter and Co. proposal\n\n1. What your business needs\n${buildSummary}\n\n2. What we are proposing\nWe are recommending a ${tier} build tailored to your goals and current site needs.\n\n3. Investment, timing, and next step\n- Deposit: ${deposit}\n- Balance due: ${balance}\n- Care Plan choice: ${carePlan}\n- Go-live target: ${goLive}\n\nIf this direction feels right, reply yes and we will move this into contract and deposit steps.`;
  }, [form]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Proposal template tool</h3>
      <p className="mb-4 text-sm text-stone">Enter the project details, then copy a one-page proposal draft in the Keiter format.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Client name
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.clientName} onChange={(e) => setField('clientName', e.target.value)} />
        </label>

        <label className="text-sm text-bark">
          Recommended tier
          <select className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.tier} onChange={(e) => setField('tier', e.target.value)}>
            <option value="Starter">Starter</option>
            <option value="Standard">Standard</option>
            <option value="Custom">Custom</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          Care Plan choice
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.carePlan} onChange={(e) => setField('carePlan', e.target.value)} />
        </label>

        <label className="text-sm text-bark">
          Go-live target
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.goLiveTarget} onChange={(e) => setField('goLiveTarget', e.target.value)} />
        </label>

        <label className="text-sm text-bark">
          Deposit amount
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.depositAmount} onChange={(e) => setField('depositAmount', e.target.value)} />
        </label>

        <label className="text-sm text-bark">
          Balance due
          <input className="mt-1 w-full rounded border border-stone/40 px-3 py-2" value={form.balanceDue} onChange={(e) => setField('balanceDue', e.target.value)} />
        </label>
      </div>

      <label className="mt-3 block text-sm text-bark">
        Build summary
        <textarea className="mt-1 min-h-24 w-full rounded border border-stone/40 px-3 py-2" value={form.buildSummary} onChange={(e) => setField('buildSummary', e.target.value)} />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={copyOutput} className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust">
          Copy proposal draft
        </button>
        {copied ? <p className="self-center text-sm text-moss">Copied.</p> : null}
      </div>

      <textarea readOnly value={output} className="mt-4 min-h-64 w-full rounded border border-stone/40 bg-cream px-3 py-2 font-mono text-xs" />
    </section>
  );
}
