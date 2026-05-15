import { useMemo, useState } from 'react';

type Rule = 'em-dash' | 'contrast-framing' | 'engagement-bait' | 'therapy-speak' | 'ai-language';

type Exercise = {
  id: string;
  sample: string;
  violations: Rule[];
  modelRewrite: string;
};

const exercises: Exercise[] = [
  {
    id: '1',
    sample: 'You will not believe what happened when we refreshed this homepage.',
    violations: ['engagement-bait'],
    modelRewrite: 'We refreshed this homepage to make the main action clearer and easier to complete.',
  },
  {
    id: '2',
    sample: 'This is not a generic agency site, it is a transformative growth engine for your brand.',
    violations: ['contrast-framing', 'ai-language'],
    modelRewrite: 'This site explains what you do in plain language and helps local customers reach you quickly.',
  },
  {
    id: '3',
    sample: 'We build clear websites for small businesses in our community.',
    violations: [],
    modelRewrite: 'No rewrite needed.',
  },
  {
    id: '4',
    sample: 'We create a safe space for your authentic journey into digital visibility.',
    violations: ['therapy-speak', 'ai-language'],
    modelRewrite: 'We listen carefully, then build a site that sounds like you and supports your business goals.',
  },
];

const ruleLabels: Record<Rule, string> = {
  'em-dash': 'Em dash',
  'contrast-framing': 'Contrast framing',
  'engagement-bait': 'Engagement bait',
  'therapy-speak': 'Therapy speak',
  'ai-language': 'AI language',
};

export default function CopyRewritePractice() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Rule[]>([]);
  const [rewrite, setRewrite] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const exercise = exercises[index];

  const toggleRule = (rule: Rule) => {
    setSelected((prev) => (prev.includes(rule) ? prev.filter((item) => item !== rule) : [...prev, rule]));
  };

  const ruleResult = useMemo(() => {
    const expected = exercise.violations.slice().sort();
    const actual = selected.slice().sort();
    return JSON.stringify(expected) === JSON.stringify(actual);
  }, [exercise.violations, selected]);

  const rewriteResult = useMemo(() => {
    if (!submitted) return false;
    if (exercise.violations.length === 0) {
      return rewrite.trim().length === 0 || /no rewrite needed/i.test(rewrite);
    }

    const cleaned = rewrite.replace(/[\u2013\u2014]/g, '').toLowerCase();
    if (cleaned.trim().length < 20) return false;

    const banned = ['transformative', 'leverage', 'you will not believe', 'authentic journey'];
    return !banned.some((word) => cleaned.includes(word));
  }, [exercise.violations.length, rewrite, submitted]);

  const next = () => {
    setIndex((prev) => (prev + 1) % exercises.length);
    setSelected([]);
    setRewrite('');
    setSubmitted(false);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Copy rewrite practice</h3>
      <p className="mb-4 text-sm text-stone">Identify rule violations, then rewrite in warm, direct, plain language.</p>

      <div className="rounded border border-stone/25 bg-cream p-4">
        <p className="text-xs uppercase tracking-wide text-stone">
          Exercise {index + 1} of {exercises.length}
        </p>
        <p className="mt-2 text-sm font-semibold text-off-black">Sample copy</p>
        <p className="mt-1 rounded border border-stone/25 bg-warm-white p-2 text-sm text-bark">{exercise.sample}</p>

        <fieldset className="mt-3">
          <legend className="text-sm font-semibold text-bark">Rules violated</legend>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            {(Object.keys(ruleLabels) as Rule[]).map((rule) => (
              <label key={rule} className="flex items-center gap-2 rounded border border-stone/20 bg-warm-white p-2 text-sm text-bark">
                <input type="checkbox" checked={selected.includes(rule)} onChange={() => toggleRule(rule)} />
                <span>{ruleLabels[rule]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="mt-3 block text-sm text-bark">
          Rewrite
          <textarea
            value={rewrite}
            onChange={(e) => setRewrite(e.target.value)}
            className="mt-1 min-h-24 w-full rounded border border-stone/40 px-3 py-2"
            placeholder="Write your improved version in plain language."
          />
        </label>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
          >
            Grade rewrite
          </button>
          <button
            type="button"
            onClick={next}
            className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
          >
            Next exercise
          </button>
        </div>

        {submitted ? (
          <div className="mt-3 rounded border border-stone/25 bg-warm-white p-3 text-sm">
            <p className="font-semibold text-off-black">Rule check: {ruleResult ? 'Correct' : 'Needs review'}</p>
            <p className="text-bark">Rewrite check: {rewriteResult ? 'Pass' : 'Needs revision'}</p>
            <p className="mt-2 text-stone">Model rewrite: {exercise.modelRewrite}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
