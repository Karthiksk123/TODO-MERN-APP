import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";
import Tabs from "./Tabs";
import Todos from "./Todos";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state)=> state.currentTab);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <article>
      <div>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todos
          key={todo._id}
          todo={todo}
          />
        ))}
      </ul>
    </article>
  );
}

export default Todo;
