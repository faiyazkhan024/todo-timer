import { FC, FormEvent, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { addSeconds } from "date-fns";

import { useTodo } from "src/hooks/useTodo";

export const AddTodo: FC = () => {
  const { createTodo } = useTodo();
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const task = form.todo.value.trim();
    const expAt = Number(form.expAt.value);

    if (!task || expAt <= 0) return;

    createTodo({ task, expAt: addSeconds(new Date(), expAt) });
    form.reset();
  };

  return (
    <Form ref={formRef} className="py-5" onSubmit={submitHandler}>
      <h1 className="mb-5">Add Todo</h1>
      <Form.Group className="mb-4" controlId="todo">
        <Form.Label>Todo</Form.Label>
        <Form.Control required type="text" placeholder="Create a PR" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="expAt">
        <Form.Label>Due Time in sec</Form.Label>
        <Form.Control required type="number" placeholder="120" min="1" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
