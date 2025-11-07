import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../components/TaskForm";
import { editTask } from "../features/tasks/tasksSlice";

export default function EditTask() {
  const { id } = useParams();
  const task = useSelector(s => s.tasks.items.find(i => i.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!task) return <div className="text-center py-8">Task not found</div>;

  const handleSubmit = (values) => {
    dispatch(editTask({ id, changes: values }));
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>
      <TaskForm initialValues={task} onSubmit={handleSubmit} />
    </div>
  );
}
