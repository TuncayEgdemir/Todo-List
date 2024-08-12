import Counter from "./Counter"
import Logo from "./Logo"


const Header = () => {
  
  return (
    <header className="col-[1/3] flex items-center justify-between px-6 row-[1/2] bg-[#fbf5ed] border-b  border-black/[0.08 ]">
        <Logo />
        <Counter />
    </header>
  )
}

export default Header