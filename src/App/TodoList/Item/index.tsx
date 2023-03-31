import React, { useState, createRef, useEffect, useContext } from "react";
import { Layout } from "./itemstyle";

import type { Todo, TodoListType } from "../../../constants";
import TodoContext from "../../../context/todo-context";

interface Props {
  todo: Todo;
}

interface State {
  onEdit: boolean;
}

const Item: React.FC<Props> = ({ todo }) => {

  // Control Todo's CSS based on complex user interaction
  const SwitchStyle = (t: Todo, onEdit: boolean): string => {
    switch (true) {
      case onEdit && t.completed:
        return "completed editing";
      case onEdit && !t.completed:
        return "editing";
      case !onEdit && t.completed:
        return "completed";
      case !onEdit && !t.completed:
        return "";

      default:
        return "";
    }
  };

  const context = useContext(TodoContext);

  return (
    <Layout>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" checked={todo.completed} 
          onChange={() => context.reverseTodo(todo.id)}/>
          <label>{todo.name}</label>
          <button className="destroy" 
          onClick={() => context.removeTodo(todo.id)}
          ></button>
        </div>
        <input className="edit" value={todo.name} />
      </li>
    </Layout>
  );
};

export default Item;
