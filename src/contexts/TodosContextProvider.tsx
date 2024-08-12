import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProviderProps = {
    children: React.ReactNode;
}

type TTodosContext= {
    todos: Todo[];
    totalNumberOfTodos: number;
    numberOfCompletedTodos: number;
    handleAddTodo: (todoText: string) => void;
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
}


export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      return JSON.parse(savedTodos);
    }
    return [];
}

const TodosContextProvider = ({children} : TodosContextProviderProps) => {

    const {isAuthenticated} = useKindeAuth()

    const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

    const totalNumberOfTodos = todos.length;
    console.log(totalNumberOfTodos);
  
    const numberOfCompletedTodos = todos.filter((i) => i.isCompleted).length;
    console.log(numberOfCompletedTodos);
  
    const handleAddTodo = (todoText: string) => {
      if (todos.length >= 3 && !isAuthenticated) {
        alert("You can only add 3 todos");
        return;
      } else {
        setTodos((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: todoText,
            isCompleted: false,
          },
        ]);
      }
    };
  
    const handleToggleTodo = (id: number) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        })
      );
    };
  
    const handleDeleteTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    useEffect(()=>{
        localStorage.setItem("todos" , JSON.stringify(todos))
    }, [todos])

  return <TodosContext.Provider value={{
    todos,
    totalNumberOfTodos,
    numberOfCompletedTodos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo
  }}>
    {children}
  </TodosContext.Provider>
}

export default TodosContextProvider