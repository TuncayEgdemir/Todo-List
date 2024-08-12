import DeleteButton from "./DeleteButton";
import { useTodosContext } from "../contexts/hooks";

const TodoList = () => {

  const { todos, handleToggleTodo , handleDeleteTodo } = useTodosContext();
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      )}
      {todos.map((item : any) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-8 h-[50px] border text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => handleToggleTodo(item.id)}
        >
          <span
            className={`${item.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {item.text}
          </span>
          <DeleteButton id={item.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
