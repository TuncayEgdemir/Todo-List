type DeleteButtonProps = {
  handleDeleteTodo: (id: number) => void;
  id: number;
}



const DeleteButton = ({handleDeleteTodo  , id} : DeleteButtonProps) => {

  return (
    <button onClick={(e)=>{
      e.stopPropagation();
      handleDeleteTodo(id)
      }}>❌</button>
  )
}

export default DeleteButton