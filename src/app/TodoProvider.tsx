import { createContext, useContext, useState } from "react";
import type { Task as Todos } from "../components/Todo/schema";

const TodoContext = createContext<{
  todos: Todos[];
  setTodos: (todos: Todos[]) => void;
}>({
  todos: [],
  setTodos: () => {},
});

// Create a provider component
function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todos[]>([]);
  console.log(todos);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

// Create a hook to access the todo state
export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
}
