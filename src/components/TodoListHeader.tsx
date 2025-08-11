import { OwnerTag } from "./OwnerTag";

type TodoListHeaderProps = {
  title: string;
  createdAt: Date;
  owner: string;
};

export const TodoListHeader = ({
  title,
  createdAt,
  owner,
}: TodoListHeaderProps) => {
  return (
    <div className="todo-list-header">
      <span className="todo-list-title">{title}</span>
      <OwnerTag owner={owner} />
    </div>
  );
};
