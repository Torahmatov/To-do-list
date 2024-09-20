import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTask } from "../redux/todoSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={handleDeleteClick}>O'chirish</button>{" "}
    </div>
  );
};

export default TaskItem;
