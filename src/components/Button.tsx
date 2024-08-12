

type ButtonProps = {
  title: string;
  buttonType?: "primary" | "secondary";
  onClick : () => void
}
 
const Button = ({title , buttonType , onClick} : ButtonProps) => {
  return (
    <button
    onClick={onClick}
    type="submit"
    className={`h-[45px] bg-[#473a2b] w-full hover:bg-[#322618] text-white rounded-[5px]  cursor-pointer ${buttonType === "secondary" ? "opacity-[%85]" : "" }`}
  >
    {title}
  </button>
  )
}

export default Button