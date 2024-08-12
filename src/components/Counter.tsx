import { useTodosContext } from "../contexts/hooks";

const Counter = () => {  
  const {numberOfCompletedTodos , totalNumberOfTodos } =  useTodosContext();
  return (
    <div>
      <p>
        <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos} todos completed
      </p>
    </div>
  );
};

export default Counter;
