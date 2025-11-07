import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../features/tasks/tasksSlice";
import { useState } from "react";

export default function Filters({ onFilter }) {
  const tasks = useSelector((s) => s.tasks.items);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const counts = {
    all: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-3">
        <input value={search} onChange={(e) => { setSearch(e.target.value); onFilter({search: e.target.value}); }} placeholder="Search tasks..." className="border rounded px-3 py-2" />
        <select onChange={(e) => onFilter({ priority: e.target.value })} className="border rounded px-3 py-2">
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-600">
        <div>All: <span className="font-medium">{counts.all}</span></div>
        <div>Completed: <span className="font-medium">{counts.completed}</span></div>
        <div>Pending: <span className="font-medium">{counts.pending}</span></div>
        <button onClick={() => dispatch(clearCompleted())} className="ml-3 text-red-600 text-sm">Clear Completed</button>
      </div>
    </div>
  );
}
