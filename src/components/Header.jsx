import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>
          🗂️ TaskManager
        </h1>

        <nav className="space-x-4">
          <NavLink to="/" className={({isActive})=> isActive ? "text-blue-600 font-medium" : "text-slate-600"} end>All</NavLink>
          <NavLink to="/completed" className={({isActive})=> isActive ? "text-blue-600 font-medium" : "text-slate-600"}>Completed</NavLink>
          <NavLink to="/pending" className={({isActive})=> isActive ? "text-blue-600 font-medium" : "text-slate-600"}>Pending</NavLink>
          <NavLink to="/add" className="ml-4 inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">+ Add Task</NavLink>
        </nav>
      </div>
    </header>
  );
}
