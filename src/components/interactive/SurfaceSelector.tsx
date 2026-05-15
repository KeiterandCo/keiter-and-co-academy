import { useMemo, useState } from 'react';

type Task = 'new-build' | 'methodology' | 'organize-files' | 'debug-code' | '';
type AccessNeed = 'none' | 'codebase' | 'documents';
type Urgency = 'low' | 'medium' | 'high';

function recommendation(task: Task, access: AccessNeed, urgency: Urgency) {
  if (task === 'methodology') {
    return {
      surface: 'Chat',
      reason: 'Use Chat when you need to think through strategy, framing, or approach before you touch files.',
    };
  }

  if (task === 'new-build') {
    if (access === 'codebase' || urgency !== 'low') {
      return {
        surface: 'Code',
        reason: 'Use Code when you are building and editing in a real repo with files, routes, and components.',
      };
    }
    return {
      surface: 'Cowork',
      reason: 'Use Cowork for desktop file setup and prep work when you are not yet deep in code edits.',
    };
  }

  if (task === 'organize-files') {
    return {
      surface: 'Cowork',
      reason: 'Use Cowork for broad file tasks, document cleanup, and folder organization work.',
    };
  }

  if (task === 'debug-code') {
    return {
      surface: 'Code',
      reason: 'Use Code for debugging because it can inspect and modify files directly in the active project.',
    };
  }

  if (access === 'documents') {
    return {
      surface: 'Cowork',
      reason: 'Cowork is strong for document-heavy tasks and desktop file operations.',
    };
  }

  return {
    surface: 'Chat',
    reason: 'Start in Chat when your task is still unclear and you need to sharpen the request first.',
  };
}

export default function SurfaceSelector() {
  const [task, setTask] = useState<Task>('');
  const [access, setAccess] = useState<AccessNeed>('none');
  const [urgency, setUrgency] = useState<Urgency>('medium');

  const result = useMemo(() => recommendation(task, access, urgency), [task, access, urgency]);

  const ready = task !== '';

  return (
    <section className="my-8 rounded-lg border border-stone/30 bg-warm-white p-5">
      <h3 className="mb-3 text-xl font-semibold text-off-black">Claude surface selector</h3>
      <p className="mb-4 text-sm text-stone">Pick your task, answer two quick questions, and get a surface recommendation.</p>

      <fieldset className="mb-4">
        <legend className="mb-2 text-sm font-semibold text-bark">1) What are you trying to do?</legend>
        <div className="grid gap-2">
          <label className="flex items-start gap-2 text-sm text-bark">
            <input type="radio" name="task" checked={task === 'new-build'} onChange={() => setTask('new-build')} />
            <span>I am starting a new build</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-bark">
            <input type="radio" name="task" checked={task === 'methodology'} onChange={() => setTask('methodology')} />
            <span>I need to talk through methodology</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-bark">
            <input type="radio" name="task" checked={task === 'organize-files'} onChange={() => setTask('organize-files')} />
            <span>I have a long file or folder set to organize</span>
          </label>
          <label className="flex items-start gap-2 text-sm text-bark">
            <input type="radio" name="task" checked={task === 'debug-code'} onChange={() => setTask('debug-code')} />
            <span>I need to debug or fix code</span>
          </label>
        </div>
      </fieldset>

      <div className="grid gap-3 md:grid-cols-2">
        <label className="text-sm text-bark">
          2) What kind of access does the task need?
          <select
            value={access}
            onChange={(e) => setAccess(e.target.value as AccessNeed)}
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          >
            <option value="none">General conversation only</option>
            <option value="codebase">Direct codebase edits</option>
            <option value="documents">Desktop document and file operations</option>
          </select>
        </label>

        <label className="text-sm text-bark">
          3) How urgent is this task?
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value as Urgency)}
            className="mt-1 w-full rounded border border-stone/40 px-3 py-2"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      {ready ? (
        <div className="mt-5 rounded border border-moss/30 bg-cream p-4">
          <p className="text-sm font-semibold text-off-black">Recommended surface: {result.surface}</p>
          <p className="mt-1 text-sm text-bark">{result.reason}</p>
        </div>
      ) : (
        <p className="mt-5 text-sm text-stone">Choose a task first to get a recommendation.</p>
      )}
    </section>
  );
}
