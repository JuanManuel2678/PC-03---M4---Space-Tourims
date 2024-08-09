import { NavBar } from "./NavBar"
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header className=" pt-8 absolute"> 
        <div className=" flex justify-between h-[96px] items-center pl-6 gap-[550px] ">
        <Link to="/">
        <figure>
            <img src="/shared/logo.svg" alt="icon page" />
        </figure>
        </Link>
       
        <NavBar />
        </div>
    </header>
  )
}


