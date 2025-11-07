import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  if (!tasks.length) {
    return <div className="text-center text-slate-500 py-8">No tasks found.</div>;
  }
  return (
    <div className="space-y-3">
      {tasks.map((t) => <TaskItem key={t.id} task={t} />)}
    </div>
  );
}
