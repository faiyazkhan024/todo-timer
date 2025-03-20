import { createContext } from "react";

import { TodoContextType } from "src/types/todo";

// Creating Context
export const TodoContext = createContext<TodoContextType>({
  todos: [],
  createTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
});
