import { FC } from "react";
import { ListGroup } from "react-bootstrap";

import { useTodo } from "src/hooks/useTodo";

import { TodoListItem } from "./TodoListItem";

export const TodoList: FC = () => {
  const { todos } = useTodo();

  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ListGroup>
  );
};
