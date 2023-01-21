import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoForm.css";
import { addNewTodo } from "../redux/actions";

function TodoForm() {

  const dispatch = useDispatch();

    const [text,setText]=useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText('')

  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        placeholder="Enter new todo..."
        className="input"
        onChange={onChangeInput}
        value={text}
      />
    </form>
  );
}

export default TodoForm;
