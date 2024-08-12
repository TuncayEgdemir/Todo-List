import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../contexts/hooks";



const AddTodoForm = () => {
  const [text, setText] = useState("");

  const {handleAddTodo} = useTodosContext()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(text)
        setText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]"
      />
      <Button title="Add to list" />
    </form>
  );
};

export default AddTodoForm;
