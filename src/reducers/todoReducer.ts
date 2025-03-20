import { v4 as uuidv4 } from "uuid";

import { TodoReducer } from "src/types/todo";

const setLocal = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

export const todoReducer: TodoReducer = (state, { type, payload }) => {
  switch (type) {
    case "Create":
      return setLocal([...state, { id: uuidv4(), ...payload } as Todo]);

    case "Update":
      return setLocal(
        state.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload } : todo
        )
      );

    case "Delete":
      return setLocal(state.filter(({ id }) => id !== payload.id));

    default:
      return state;
  }
};
