export type Routes = '/' | '/active' | '/completed'

export interface Todo {
  id: string
  name: string
  completed: boolean
}

export type TodoListType = Todo[]