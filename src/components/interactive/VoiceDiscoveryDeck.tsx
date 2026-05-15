import { useMemo, useState } from 'react';

type VoiceCard = {
  question: string;
  why: string;
  listenFor: string;
};

const cards: VoiceCard[] = [
  {
    question: 'When someone asks what you do, what do you say first in your own words?',
    why: 'The first sentence usually carries the business owner\'s natural language, not polished marketing phrasing.',
    listenFor: 'Repeated words, plain-language verbs, and emotional emphasis.',
  },
  {
    question: 'What are customers usually worried about before they call?',
    why: 'This exposes friction and trust barriers your copy should address directly.',
    listenFor: 'Fear words, confusion points, and repeated objections.',
  },
  {
    question: 'What words sound wrong for your business, even if your industry uses them?',
    why: 'This gives you a clear do-not-use list and protects the voice from drift.',
    listenFor: 'Hard no phrases, cliches, and tone boundaries.',
  },
  {
    question: 'What are you most proud of in your work, and why?',
    why: 'Pride language often maps to values and differentiators that belong on key pages.',
    listenFor: 'Values, process language, and outcomes tied to real work.',
  },
  {
    question: 'What do your best customers say after working with you?',
    why: 'Client language can become proof-driven lines in testimonials and service framing.',
    listenFor: 'Direct quotes and repeated sentiment patterns.',
  },
];

export default function VoiceDiscoveryDeck() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = useMemo(() => cards[index], [index]);

  const next = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const previous = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-2 text-xl font-semibold text-off-black">Voice discovery card deck</h3>
      <p className="mb-4 text-sm text-stone">Use these prompts in intake. Flip each card for why it matters and what to listen for.</p>

      <article className="rounded border border-stone/25 bg-cream p-4" aria-live="polite">
        <p className="text-xs uppercase tracking-wide text-stone">
          Card {index + 1} of {cards.length}
        </p>
        {!flipped ? (
          <p className="mt-2 text-sm font-semibold text-off-black">{card.question}</p>
        ) : (
          <div className="mt-2 space-y-2 text-sm">
            <p className="text-bark">Why this matters: {card.why}</p>
            <p className="text-stone">Listen for: {card.listenFor}</p>
          </div>
        )}
      </article>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFlipped((prev) => !prev)}
          className="min-h-11 rounded bg-moss px-4 py-2 text-sm font-semibold text-cream hover:bg-rust"
        >
          {flipped ? 'Show question' : 'Flip card'}
        </button>
        <button
          type="button"
          onClick={previous}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={next}
          className="min-h-11 rounded border border-moss px-4 py-2 text-sm font-semibold text-moss hover:bg-moss/10"
        >
          Next
        </button>
      </div>
    </section>
  );
}
