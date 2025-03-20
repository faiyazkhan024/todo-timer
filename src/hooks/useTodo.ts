import { useContext } from "react";

import { TodoContext } from "src/contexts/TodoContext";

export const useTodo = () => useContext(TodoContext);
