import { TodoListDetails } from "./TodoListDetails";
import { TodoListHeader } from "./TodoListHeader";
import type { TodoItem } from "../types";

type TodoListItemProps = {
  todo?: TodoItem;
};

export const TodoListItem = ({ todo }: TodoListItemProps) => {
  return (
    todo && (
      <div className="todo-list-item">
        <input
          className="todo-list-checkbox"
          type="checkbox"
          checked={todo.completed}
          readOnly
        />
        <div className="todo-list-content">
          <TodoListHeader
            title={todo.title}
            createdAt={todo.createdAt}
            owner={todo.owner}
          />
          <TodoListDetails
            descritpion={todo.description}
            dueDate={todo.dueDate}
          />
        </div>
      </div>
    )
  );
};
