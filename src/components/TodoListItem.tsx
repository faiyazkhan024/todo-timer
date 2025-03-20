import { FC } from "react";
import { Button, ListGroup } from "react-bootstrap";

import { useTimer } from "src/hooks/useTimer";
import { useTodo } from "src/hooks/useTodo";

export const TodoListItem: FC<Todo> = ({
  id,
  task,
  expAt,
  isExpire,
  isComplete,
}) => {
  const { updateTodo, deleteTodo } = useTodo();

  const timeLeft = useTimer(expAt, isComplete ?? false, () =>
    updateTodo({ id, isExpire: true })
  );

  return (
    <ListGroup.Item
      key={id}
      variant={isComplete ? "success" : isExpire ? "danger" : undefined}
      className="d-md-flex align-items-center gap-md-4"
    >
      <div className="d-flex flex-fill">
        <h5 className="mb-md-0 flex-fill">{task}</h5>
        <p className="mb-md-0 ms-2 flex-grow-0">
          {timeLeft}s <i className="bi bi-clock"></i>
        </p>
      </div>
      <div className="d-flex justify-content-between">
        {!isComplete && (
          <Button
            className="m-md-2"
            onClick={() => updateTodo({ id, isComplete: true })}
          >
            <i className="bi bi-check-circle"></i>
          </Button>
        )}
        <Button
          variant="danger"
          className="m-md-2"
          onClick={() => deleteTodo({ id })}
        >
          <i className="bi bi-trash"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};
