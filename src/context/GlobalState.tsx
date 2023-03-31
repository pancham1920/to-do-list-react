import React, { useState, useContext } from "react";
import TodoContext from "./todo-context";

const GlobalState = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "wash clothes",
      completed: false,
    }
  ]);

  const [newTask, setNewTask] = useState("");

  const updateNewTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  }

  const addTodo = (e:React.KeyboardEvent<HTMLInputElement>, newTask: string): void => {
    if(e.key === 'Enter' && newTask.trim().length > 0) {
      e.preventDefault();
      e.stopPropagation();
      console.log(newTask);
      const allTasks = tasks;
      //const allTasks: Task[] = [];

      allTasks.push({
        id: Math.round(Math.random() * 1000000).toString(),
        name: newTask,
        completed: false
      });

      setTasks([...allTasks]);
      setNewTask("");
      console.log(tasks);

    }
    
  };

  const removeTodo = (id: string) => {
    console.log(`global delete todo called - ${id}`);
    const removedArray = tasks.filter(
      (task): boolean => task.id !== id
    )

    setTasks([...removedArray]);
  };

  const reverseTodo = (id: string) => {
    console.log(`global reverse todo called - ${id}`);
    const reversedArray = tasks.map((item) => {
      if ((item.id === id)) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });

    console.log(`reversedArray - ${JSON.stringify(reversedArray)}`);

    setTasks([...reversedArray]);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks : tasks,
        newTask : newTask,
        addTodo : addTodo,
        updateNewTask: updateNewTask,
        removeTodo : removeTodo,
        reverseTodo : reverseTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );

};

export default GlobalState;
