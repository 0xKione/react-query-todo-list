import React, { useState } from "react";

export const AddTodoItem = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button onClick={() => setShowForm(true)}>+ Add New Todo</button>
      {showForm && (
        <div>
          <input type="text" placeholder="Todo title" />
          <textarea placeholder="Todo description" />
          <div>
            <button
              onClick={() => {
                setShowForm(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};
