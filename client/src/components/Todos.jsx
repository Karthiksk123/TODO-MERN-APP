import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { toggleTodo,updateTodo,deleteTodo } from "../redux/actions";

function Todos({ todo }) {
  const dispatch = useDispatch();
  const [editing,setEditing] = useState(false)
  const [text,setText] = useState(todo.data)
  const onFormSubmit=(e)=>{
    e.preventDefault();
    setEditing(prevState=>!prevState);
    dispatch(updateTodo(todo._id,text))
  }

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#34495e",
      }}
    >
      <span style={{ display:editing?'none':''}}>{todo.data}</span>
      <form style={{display:editing?'inline':'none'}} onSubmit={onFormSubmit}>
        <input type="text" value={text} className="edit-todo" onChange={(e)=>setText(e.target.value)}/>
      </form>
      <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
        <DeleteIcon />
      </span>
      <span className="icon" onClick={()=>setEditing(prevState => !prevState)}>
        <EditIcon />
      </span>
    </li>
  );
}

export default Todos;
