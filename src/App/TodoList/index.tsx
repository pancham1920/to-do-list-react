import React, { ReactElement, useContext } from 'react';
import { Routes, Todo } from "../../constants";
import { Layout } from "./todoliststyle";
import TodoContext  from "../../context/todo-context";
import Item from "./Item";

interface Props {
  path: Routes;
}

//export type Routes = '/' | 'active' | 'completed';

const TodoList: React.FC<Props> = ({ path }) => {

  const context = useContext(TodoContext);

  return (
    <Layout>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {
            context.tasks.filter((t: Todo): boolean => {
              switch (path) {
                case '/':
                  return true
                case '/active':
                  return t.completed === false
                case '/completed':
                  return t.completed === true
                default:
                  return true
              }
            }).map((t: Todo): ReactElement => {
              return <Item key={t.id} todo={t} />
            })
          }
        </ul>
      </section>
    </Layout>
  );
};

export default TodoList;
