import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../store/todos";
import { AppDispatch } from "../store/store";
import useReduxState from "../hooks/useReduxState";

const TodoInput: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [color] = useReduxState("color", "blue");

  return (
    <form
      className="todoInput"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(todos.actions.addTodo({ message: inputValue, color }));
        setInputValue("");
      }}
    >
      <label htmlFor="todo-input">Enter Todo Here</label>
      <input
        id="todo-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
      />
      <button type="submit" style={{ color: color }}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
