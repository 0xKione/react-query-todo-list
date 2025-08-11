import React from "react";

import { SidebarItem } from "./SidebarItem";
import { useAppContext, useAppDispatchContext } from "../AppContext";

export const Sidebar = () => {
  const { todos, hideCompleted } = useAppContext();
  const { setHideCompleted } = useAppDispatchContext();

  return (
    <div className="sidebar">
      {todos.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="checkbox-container" style={{ marginBottom: 30 }}>
            <input
              type="checkbox"
              checked={hideCompleted}
              onChange={() => setHideCompleted(!hideCompleted)}
            />
            <span> Hide Completed</span>
          </div>
          <div className="todo-list-container">
            {todos.map((todo) => (
              <SidebarItem
                key={todo.id}
                todoId={todo.id}
                todoTitle={todo.title}
                todoCompleted={todo.completed}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
