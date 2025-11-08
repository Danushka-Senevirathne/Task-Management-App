import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/pending" element={<Pending />} />
        </Routes>
      </main>
      <footer className="bg-white border-t py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Task Manager • Built with React + Redux Toolkit + Tailwind
      </footer>
    </div>
  ); 
}
