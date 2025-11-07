import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded p-4 shadow flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3">
          <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleComplete(task.id))} className="w-4 h-4" />
          <h3 className={`text-lg font-medium ${task.completed ? "line-through text-slate-400" : ""}`}>{task.title}</h3>
          <span className={`ml-2 text-xs px-2 py-0.5 rounded ${task.priority === "high" ? "bg-red-100 text-red-700" : task.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-700"}`}>{task.priority}</span>
        </div>
        {task.desc && <p className="mt-2 text-sm text-slate-600">{task.desc}</p>}
        <div className="mt-2 text-xs text-slate-500">
          Created: {new Date(task.createdAt).toLocaleString()} {task.dueDate ? `• Due: ${task.dueDate}` : ""}
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <button onClick={() => navigate(`/edit/${task.id}`)} className="text-sm text-blue-600">Edit</button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="text-sm text-red-600">Delete</button>
      </div>
    </div>
  );
}
