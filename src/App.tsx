import { FC } from "react";

import { TodoProvider } from "./providers/TodoProvider";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

const App: FC = () => {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
};

export default App;
