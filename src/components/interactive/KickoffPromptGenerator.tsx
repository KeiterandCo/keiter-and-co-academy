import { useMemo, useState } from 'react';

type KickoffInput = {
  businessName: string;
  businessType: string;
  primaryVisitorAction: string;
  pageCountTarget: string;
  voiceNotes: string;
  brandNotes: string;
};

const initialState: KickoffInput = {
  businessName: '',
  businessType: '',
  primaryVisitorAction: '',
  pageCountTarget: '5',
  voiceNotes: '',
  brandNotes: '',
};

function clean(value: string) {
  return value.replace(/[\u2013\u2014]/g, ', ').replace(/\s+/g, ' ').trim();
}

export default function KickoffPromptGenerator() {
  const [form, setForm] = useState<KickoffInput>(initialState);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => {
    const businessName = clean(form.businessName) || '[Business name]';
    const businessType = clean(form.businessType) || '[Business type]';
    const primaryVisitorAction = clean(form.primaryVisitorAction) || '[Primary visitor action]';
    const pageCountTarget = clean(form.pageCountTarget) || '[Page count target]';
    const voiceNotes = clean(form.voiceNotes) || '[Voice notes needed]';
    const brandNotes = clean(form.brandNotes) || '[Brand notes needed]';

    return `# ${businessName}: Kickoff\n\nProject: ${businessName}\nBusiness type: ${businessType}\nStatus: Draft kickoff generated in the academy practice tool\n\n## Build context\nThis is a Keiter and Co. style build kickoff for a ${businessType}.\nThe primary visitor action is: ${primaryVisitorAction}.\n\n## Goal\nBuild a clean, credible site that helps a visitor complete the primary action with confidence.\nTarget page count: ${pageCountTarget}.\n\n## Voice and brand notes\n- Voice notes: ${voiceNotes}\n- Brand notes: ${brandNotes}\n\n## Phase 1: Scaffold and shell\nOne-line summary: Stand up the project shell, routing, layout, and base styling so the site is navigable and reviewable.\n\nInputs:\n- Kickoff draft\n- Decision log draft\n- Brand notes and voice notes\n\nTasks:\n1. Initialize Astro project and dependencies.\n2. Build base layout, header, footer, and mobile nav.\n3. Stub every planned route from the site map.\n4. Add metadata scaffolding and OpenGraph defaults.\n5. Verify routes and responsive behavior on mobile and desktop.\n\nQuality gates:\n- Every route renders\n- Keyboard focus is visible on nav and controls\n- Mobile navigation works and closes correctly\n\nStop conditions:\n- Missing brand direction that blocks page styling\n- Missing required legal or compliance details\n\n## Phase 2: Content infrastructure\nOne-line summary: Build content models and page templates that can scale cleanly.\n\nTasks:\n1. Define content schema for pages and modules.\n2. Build reusable content components.\n3. Add placeholder content with source-of-truth notes.\n4. Confirm template rendering for all page types.\n\nQuality gates:\n- Content schemas validate\n- Templates render without errors\n- Placeholder content follows copy standards\n\n## Handoff note template\nDone:\n-\n\nDeferred:\n-\n\nKnown issues:\n-\n\nState:\n- Localhost: http://localhost:4321\n- Next phase: [Name]\n\nFor Olivia:\n-`;
  }, [form]);

  const setField = (key: keyof KickoffInput, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-3 text-xl font-semibold text-off-black">Kickoff prompt generator</h3>
      <p className="mb-4 text-sm text-stone">Enter core details, then copy a starter kickoff draft you can edit.</p>

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
          Business type
          <input
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
            value={form.businessType}
            onChange={(e) => setField('businessType', e.target.value)}
          />
        </label>

        <label className="text-sm text-bark">
          Primary visitor action
          <input
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
            value={form.primaryVisitorAction}
            onChange={(e) => setField('primaryVisitorAction', e.target.value)}
          />
        </label>

        <label className="text-sm text-bark">
          Page count target
          <input
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
            value={form.pageCountTarget}
            onChange={(e) => setField('pageCountTarget', e.target.value)}
          />
        </label>
      </div>

      <label className="mt-3 block text-sm text-bark">
        Voice notes
        <textarea
          className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2"
          value={form.voiceNotes}
          onChange={(e) => setField('voiceNotes', e.target.value)}
        />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Brand notes
        <textarea
          className="mt-1 min-h-20 w-full rounded border border-stone/40 px-3 py-2"
          value={form.brandNotes}
          onChange={(e) => setField('brandNotes', e.target.value)}
        />
      </label>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onCopy}
          className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
        >
          Copy kickoff draft
        </button>
        {copied ? <p className="self-center text-sm text-moss">Copied.</p> : null}
      </div>

      <label className="mt-4 block text-sm text-bark" htmlFor="kickoff-output">
        Generated output
      </label>
      <textarea
        id="kickoff-output"
        readOnly
        value={output}
        className="mt-1 min-h-64 w-full rounded border border-stone/40 bg-cream px-3 py-2 font-mono text-xs"
      />
    </section>
  );
}
