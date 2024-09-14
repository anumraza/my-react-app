import React from "react";
import "./Todo.css";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={`todo ${task.completed ? "completed" : ""}`}>
      <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className="todo-actions">
        <button onClick={() => editTodo(task.id)} className="edit-btn">
          Edit
        </button>
        <button onClick={() => deleteTodo(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};