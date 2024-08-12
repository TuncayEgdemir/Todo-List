import { useContext } from "react";
import { TodosContext } from "./TodosContextProvider";

export function useTodosContext() {
    const context =  useContext(TodosContext);
    if(!context) {
      throw new Error('forgot to add provider');
    }

    return context
}