type TodoListDetailsProps = {
  descritpion: string;
  dueDate?: Date;
};

export const TodoListDetails = ({
  descritpion,
  dueDate,
}: TodoListDetailsProps) => {
  return (
    <div className="todo-list-details">
      <span>{descritpion}</span>
      {dueDate && (
        <span>
          <strong>Due Date:</strong> {dueDate.toLocaleString()}
        </span>
      )}
    </div>
  );
};
