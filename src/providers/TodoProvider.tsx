import { FC, useReducer, useCallback } from "react";

import { TodoContext } from "src/contexts/TodoContext";
import { todoReducer } from "src/reducers/todoReducer";
import { TodoContextType, TodoProviderProps } from "src/types/todo";

const initialState: Array<Todo> = JSON.parse(
  localStorage.getItem("todos") ?? "[]"
);

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const createTodo: TodoContextType["createTodo"] = useCallback(
    (todo) => dispatch({ type: "Create", payload: todo }),
    []
  );

  const updateTodo: TodoContextType["updateTodo"] = useCallback(
    (todo) => dispatch({ type: "Update", payload: todo }),
    []
  );

  const deleteTodo: TodoContextType["deleteTodo"] = useCallback(
    (todo) => dispatch({ type: "Delete", payload: todo }),
    []
  );

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
