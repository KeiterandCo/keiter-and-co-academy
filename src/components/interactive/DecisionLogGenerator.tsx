import { useMemo, useState } from 'react';

type DecisionInput = {
  businessName: string;
  context: string;
  decisionTopic: string;
  optionA: string;
  optionB: string;
  optionC: string;
  decided: string;
  reasoning: string;
  outOfScope: string;
  flags: string;
};

const initialState: DecisionInput = {
  businessName: '',
  context: '',
  decisionTopic: '',
  optionA: '',
  optionB: '',
  optionC: '',
  decided: '',
  reasoning: '',
  outOfScope: '',
  flags: '',
};

function clean(value: string) {
  return value.replace(/[\u2013\u2014]/g, ', ').replace(/\s+/g, ' ').trim();
}

export default function DecisionLogGenerator() {
  const [form, setForm] = useState<DecisionInput>(initialState);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    const businessName = clean(form.businessName) || '[Business name]';
    const context = clean(form.context) || '[Context summary]';
    const decisionTopic = clean(form.decisionTopic) || '[Decision topic]';
    const optionA = clean(form.optionA) || '[Option A]';
    const optionB = clean(form.optionB) || '[Option B]';
    const optionC = clean(form.optionC);
    const decided = clean(form.decided) || '[Decision made]';
    const reasoning = clean(form.reasoning) || '[Reasoning]';
    const outOfScope = clean(form.outOfScope) || '[Out of scope note]';
    const flags = clean(form.flags) || '[Open flags note]';

    return `# ${businessName}: Decision log\n\n## Context\n${context}\n\n## Key decision\nTopic: ${decisionTopic}\n\nConsidered:\n- ${optionA}\n- ${optionB}${optionC ? `\n- ${optionC}` : ''}\n\nDecided:\n- ${decided}\n\nReasoning:\n${reasoning}\n\n## Out of scope\n- ${outOfScope}\n\n## Flags\n- ${flags}`;
  }, [form]);

  const setField = (key: keyof DecisionInput, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-3 text-xl font-semibold text-off-black">Decision log generator</h3>
      <p className="mb-4 text-sm text-stone">Draft a Keiter-format decision log block with context, options, decision, and reasoning.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Business name
          <input
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
            value={form.businessName}
            onChange={(e) => setField('businessName', e.target.value)}
          />
        </label>

        <label className="text-sm text-bark">
          Decision topic
          <input
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
            value={form.decisionTopic}
            onChange={(e) => setField('decisionTopic', e.target.value)}
          />
        </label>
      </div>

      <label className="mt-3 block text-sm text-bark">
        Context
        <textarea
          className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
          value={form.context}
          onChange={(e) => setField('context', e.target.value)}
        />
      </label>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Option A
          <textarea
            className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
            value={form.optionA}
            onChange={(e) => setField('optionA', e.target.value)}
          />
        </label>

        <label className="text-sm text-bark">
          Option B
          <textarea
            className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
            value={form.optionB}
            onChange={(e) => setField('optionB', e.target.value)}
          />
        </label>
      </div>

      <label className="mt-3 block text-sm text-bark">
        Option C (optional)
        <textarea
          className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
          value={form.optionC}
          onChange={(e) => setField('optionC', e.target.value)}
        />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Decision made
        <textarea
          className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
          value={form.decided}
          onChange={(e) => setField('decided', e.target.value)}
        />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Reasoning
        <textarea
          className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2"
          value={form.reasoning}
          onChange={(e) => setField('reasoning', e.target.value)}
        />
      </label>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Out of scope
          <textarea
            className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
            value={form.outOfScope}
            onChange={(e) => setField('outOfScope', e.target.value)}
          />
        </label>

        <label className="text-sm text-bark">
          Open flags
          <textarea
            className="mt-1 min-h-16 w-full rounded border border-stone/40 px-3 py-2"
            value={form.flags}
            onChange={(e) => setField('flags', e.target.value)}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
        >
          Copy decision log draft
        </button>
        {copied ? <p className="self-center text-sm text-moss">Copied.</p> : null}
      </div>

      <label className="mt-4 block text-sm text-bark" htmlFor="decision-output">
        Generated output
      </label>
      <textarea
        id="decision-output"
        readOnly
        value={output}
        className="mt-1 min-h-56 w-full rounded border border-stone/40 bg-cream px-3 py-2 font-mono text-xs"
      />
    </section>
  );
}
