import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.todos);
  const filter = tasks.filter;

  const filteredTasks = tasks.tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "ongoing") return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>Vazifalar yo'q</p>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
