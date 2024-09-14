import React, { useState } from "react";
import "./EditTodoForm.css";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-input"
        placeholder="Update task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="save-btn">
        Save
      </button>
    </form>
  );
};
