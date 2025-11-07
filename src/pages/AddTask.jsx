import TaskForm from "../components/TaskForm";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(addTask(values));
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
