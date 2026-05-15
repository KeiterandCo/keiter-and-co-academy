import { useMemo, useState } from 'react';

export default function TierSelector() {
  const [businessType, setBusinessType] = useState('service');
  const [pageCount, setPageCount] = useState('5-8');
  const [ecommerce, setEcommerce] = useState('no');
  const [voiceSupport, setVoiceSupport] = useState('yes');
  const [customFunctionality, setCustomFunctionality] = useState('no');

  const recommendation = useMemo(() => {
    let tier = 'Starter';
    const reasons: string[] = [];

    if (pageCount === '9+' || voiceSupport === 'yes') {
      tier = 'Standard';
      reasons.push('The project needs a fuller structure than a lean starter scope.');
    }

    if (ecommerce === 'yes' || customFunctionality === 'yes') {
      tier = 'Custom';
      reasons.push('Special functionality or commerce requirements push this beyond package defaults.');
    }

    if (tier === 'Starter') {
      reasons.push('Scope is focused with a clear primary path and no custom feature load.');
    }

    reasons.push(`Business type considered: ${businessType}.`);

    return { tier, reasons };
  }, [businessType, pageCount, ecommerce, voiceSupport, customFunctionality]);

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Tier selector</h3>
      <p className="mb-4 text-sm text-stone">Select project characteristics to get a recommended tier with plain-language reasoning.</p>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Client business type
          <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="mt-1 w-full rounded border border-stone/40 px-3 py-2">
            <option value="service">Service business</option>
            <option value="retail">Retail business</option>
            <option value="trade">Trade or contractor</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          Estimated page count
          <select value={pageCount} onChange={(e) => setPageCount(e.target.value)} className="mt-1 w-full rounded border border-stone/40 px-3 py-2">
            <option value="1-4">1 to 4 pages</option>
            <option value="5-8">5 to 8 pages</option>
            <option value="9+">9 or more pages</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          E-commerce needed
          <select value={ecommerce} onChange={(e) => setEcommerce(e.target.value)} className="mt-1 w-full rounded border border-stone/40 px-3 py-2">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          Voice support needed
          <select value={voiceSupport} onChange={(e) => setVoiceSupport(e.target.value)} className="mt-1 w-full rounded border border-stone/40 px-3 py-2">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>

        <label className="text-sm text-bark md:col-span-2">
          Custom functionality needed
          <select
            value={customFunctionality}
            onChange={(e) => setCustomFunctionality(e.target.value)}
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
      </div>

      <div className="mt-4 rounded border border-moss/30 bg-cream p-4">
        <p className="text-sm font-semibold text-off-black">Recommended tier: {recommendation.tier}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bark">
          {recommendation.reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-stone">Confirm current pricing and terms from source-of-truth docs before sending any quote.</p>
      </div>
    </section>
  );
}
