import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    // sample:
    // { id: '1', title: 'Sample task', desc: '...', completed: false, priority: 'medium', createdAt: 1670000000000 }
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare({ title, desc, dueDate, priority }) {
        return {
          payload: {
            id: nanoid(),
            title,
            desc: desc || "",
            completed: false,
            priority: priority || "medium",
            createdAt: Date.now(),
            dueDate: dueDate || null,
          },
        };
      },
    },
    editTask(state, action) {
      const { id, changes } = action.payload;
      const t = state.items.find((i) => i.id === id);
      if (t) Object.assign(t, changes);
    },
    toggleComplete(state, action) {
      const id = action.payload;
      const t = state.items.find((i) => i.id === id);
      if (t) t.completed = !t.completed;
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
    },
    clearCompleted(state) {
      state.items = state.items.filter((i) => !i.completed);
    },
  },
});

export const { addTask, editTask, toggleComplete, deleteTask, clearCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;
