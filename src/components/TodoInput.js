import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTask(inputValue));
      setInputValue("");
    } else {
      alert("Iltimos, vazifani kiriting!");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        placeholder="Vazifangizni kiriting"
      />
      <button onClick={handleAddTask}>Qo'shish</button>
    </div>
  );
};

export default TodoInput;
