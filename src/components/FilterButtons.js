import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  return (
    <div className="filter-buttons">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={filter === "all" ? "active" : ""}
      >
        Barchasi
      </button>
      <button
        onClick={() => dispatch(setFilter("ongoing"))}
        className={filter === "ongoing" ? "active" : ""}
      >
        Ovoz berilayotgan
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={filter === "completed" ? "active" : ""}
      >
        Tugallanganlar
      </button>
    </div>
  );
};

export default FilterButtons;
