import React from "react";
import TodoInput from "./components/TodoInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>Lista de tarefas</h1>
      <TodoInput />
      <FilterButtons />
      <TaskList />
    </div>
  );
}

export default App;
