import { useMemo, useState } from 'react';

type CheckResult = {
  name: string;
  pass: boolean;
  detail: string;
};

function hasLocationSignal(text: string) {
  const pattern = /\b(in|near|serving|based in|across)\b|\b[A-Z]{2}\b|\b(usa|united states|new york|massachusetts|vermont|connecticut|new hampshire)\b/i;
  return pattern.test(text);
}

function readsLikeAnswer(text: string) {
  const lowered = text.trim().toLowerCase();
  if (!lowered) return false;
  const startsLikeAnswer = /^(we|our|this|learn|self-paced|a|an)\b/.test(lowered);
  const hasVerb = /\b(is|helps|teaches|builds|offers|supports|guides|serves|delivers)\b/.test(lowered);
  return startsLikeAnswer && hasVerb;
}

function plainLanguageScore(text: string) {
  const words = text
    .replace(/[^a-zA-Z\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return { pass: false, detail: 'Description is empty.' };

  const avgLen = words.reduce((sum, w) => sum + w.length, 0) / words.length;
  const jargon = /(synergy|leverage|robust|innovative|cutting-edge|revolutionary|seamless|optimize|best-in-class)/i.test(text);
  const pass = avgLen <= 6.2 && !jargon;

  return {
    pass,
    detail: pass
      ? 'Reads like plain language for a general audience.'
      : 'Simplify phrasing and remove jargon-heavy words.',
  };
}

export default function AEOChecker() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [businessType, setBusinessType] = useState('local');
  const [schemaType, setSchemaType] = useState('LocalBusiness');

  const results = useMemo(() => {
    const text = description.replace(/[\u2013\u2014]/g, ', ');
    const titleOk = title.trim().length > 0 && title.trim().length <= 60;
    const lengthOk = text.trim().length > 0 && text.trim().length <= 160;
    const answerOk = readsLikeAnswer(text);
    const locationNeeded = businessType === 'local';
    const locationOk = !locationNeeded || hasLocationSignal(`${title} ${text}`);
    const plain = plainLanguageScore(text);
    const schemaOk = schemaType !== 'none';

    const list: CheckResult[] = [
      {
        name: 'Length under 160 chars',
        pass: lengthOk,
        detail: lengthOk ? 'Description length is in range.' : 'Keep the description at 160 characters or less.',
      },
      {
        name: 'Written as a direct answer',
        pass: answerOk,
        detail: answerOk ? 'The description reads like an answer.' : 'Start with a clear answer phrase like "This curriculum..." or "We help...".',
      },
      {
        name: 'Location signals present',
        pass: locationOk,
        detail: locationOk
          ? 'Location signals are present or not required for this business type.'
          : 'Add city, region, or service-area wording for local discovery.',
      },
      {
        name: 'Plain language',
        pass: plain.pass,
        detail: plain.detail,
      },
      {
        name: 'Schema referenced',
        pass: schemaOk,
        detail: schemaOk ? `Schema selected: ${schemaType}.` : 'Select the schema you plan to include on this page.',
      },
      {
        name: 'Title in range',
        pass: titleOk,
        detail: titleOk ? 'Title length is in range.' : 'Keep title under 60 characters and non-empty.',
      },
    ];

    return list;
  }, [title, description, businessType, schemaType]);

  const passing = results.filter((r) => r.pass).length;
  const score = `${passing} / ${results.length}`;

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-3 text-xl font-semibold text-off-black">AEO completeness checker</h3>
      <p className="mb-4 text-sm text-stone">Check page title and meta description against Keiter AEO standards.</p>

      <label className="block text-sm text-bark">
        Page title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          placeholder="Example: Build standards | Keiter and Co. Academy"
        />
      </label>

      <label className="mt-3 block text-sm text-bark">
        Meta description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 min-h-24 w-full rounded border border-stone/40 px-3 py-2"
        />
      </label>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          Business type
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          >
            <option value="local">Local business</option>
            <option value="non-local">Non-local or broad audience</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          Planned schema block
          <select
            value={schemaType}
            onChange={(e) => setSchemaType(e.target.value)}
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          >
            <option value="LocalBusiness">LocalBusiness</option>
            <option value="Course">Course</option>
            <option value="LearningResource">LearningResource</option>
            <option value="FAQPage">FAQPage</option>
            <option value="none">None selected yet</option>
          </select>
        </label>
      </div>

      <div className="mt-4 rounded border border-moss/30 bg-cream p-4">
        <p className="text-sm font-semibold text-off-black">Score: {score}</p>
        <ul className="mt-2 space-y-2 text-sm">
          {results.map((result) => (
            <li key={result.name} className="rounded border border-stone/25 bg-warm-white px-3 py-2">
              <p className="font-medium text-bark">
                {result.pass ? 'Pass' : 'Needs work'}: {result.name}
              </p>
              <p className="text-stone">{result.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
