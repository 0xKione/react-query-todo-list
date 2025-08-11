import { TodoListItem } from "./TodoListItem";

import { useAppContext } from "../AppContext";

export const MainContent = () => {
  const { todos, selectedTodoId } = useAppContext();

  return (
    <div className="main-container">
      {selectedTodoId ? (
        <TodoListItem todo={todos.find((todo) => todo.id === selectedTodoId)} />
      ) : (
        <span>Select a todo to see details</span>
      )}
    </div>
  );
};
