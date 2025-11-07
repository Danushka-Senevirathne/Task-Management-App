import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice";

// load initial state from localStorage
const loadState = () => {
  try {
    const s = localStorage.getItem("tm_tasks_v1");
    if (!s) return undefined;
    return { tasks: JSON.parse(s) };
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: loadState(),
});

// subscribe to save
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("tm_tasks_v1", JSON.stringify(state.tasks));
  } catch {}
});

export default store;
