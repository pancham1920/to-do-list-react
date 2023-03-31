import React from 'react';

export default React.createContext({
  tasks : [
    {
      id: "1",
      name: "wash clothes",
      completed: false
    }
  ],
  newTask : "",
  addTodo : (event : React.KeyboardEvent<HTMLInputElement>, newTask : string) => {},
  updateNewTask : (event: React.ChangeEvent<HTMLInputElement>) => {},
  removeTodo: (id: string) => {},
  reverseTodo : (id: string) => {}
});