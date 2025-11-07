import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

export default function Pending() {
  const tasks = useSelector((s) => s.tasks.items.filter(t => !t.completed));
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pending Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}
