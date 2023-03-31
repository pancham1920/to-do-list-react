import React, { useState, useContext } from "react";
import { Layout } from "./searchbarstyle";
import Task from "./Task";
import earlierTasks from "./earlierTasks";
import TodoContext from "../../context/todo-context";

// interface AppState {
//   tasks: Task[];
//   newTask: string;
// }

const SearchBar: React.FC = () => {
  const [ tasks, setTasks ] = useState(earlierTasks);
  const [ newTask, setNewTask ] = useState("");
  
  // function addTodo(e:React.KeyboardEvent<HTMLInputElement>, newTask: string): void {
  //   if(e.key === 'Enter' && newTask.trim().length > 0) {
  //     console.log(newTask);
  //     const allTasks = tasks;
  //     //const allTasks: Task[] = [];

  //     allTasks.push({
  //       id: Math.round(Math.random() * 1000000).toString(),
  //       name: newTask,
  //       completed: false
  //     });

  //     setTasks([...allTasks]);
  //     setNewTask("");
  //     console.log(tasks);

  //   }
  // }

  const context = useContext(TodoContext);

  return (
    <Layout>
      <header className="header">
        <h1>todo list</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="Add Todos"
          value={newTask}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
          onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => context.addTodo(e, newTask)}
        ></input>
      </header>
    </Layout>
  );
};

export default SearchBar;
