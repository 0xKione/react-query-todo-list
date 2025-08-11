import React from "react";

import { useAppContext, useAppDispatchContext } from "../AppContext";

type SidebarItemProps = {
  todoId: number;
  todoTitle: string;
  todoCompleted: boolean;
};

export const SidebarItem = ({
  todoId,
  todoTitle,
  todoCompleted,
}: SidebarItemProps) => {
  const { selectedTodoId, hideCompleted } = useAppContext();
  const { setSelectedTodoId } = useAppDispatchContext();

  if (hideCompleted && todoCompleted) {
    return null;
  }

  return (
    <div
      onClick={() => setSelectedTodoId(todoId)}
      className={`sidebar-item${selectedTodoId === todoId ? " selected" : ""}`}
    >
      {todoTitle}
    </div>
  );
};
