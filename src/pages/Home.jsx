import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";

export default function Home() {
  const tasks = useSelector((s) => s.tasks.items);
  const [filters, setFilters] = useState({ search: "", priority: "" });

  const filtered = useMemo(() => {
    return tasks.filter(t => {
      if (filters.priority && t.priority !== filters.priority) return false;
      if (filters.search && ![t.title, t.desc].join(" ").toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
  }, [tasks, filters]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Tasks</h2>
      <Filters onFilter={(f) => setFilters(prev => ({...prev, ...f}))} />
      <TaskList tasks={filtered} />
    </div>
  );
}
