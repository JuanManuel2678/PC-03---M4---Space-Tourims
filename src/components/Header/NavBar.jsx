import { Link } from 'react-router-dom'

export const NavBar = () => {
  const pages = ["00 HOME", "01 DESTINATION", "02 CREW", "03 TECHNOLOGY"];

  return (
    <nav className=" w-[830px] h-full ">
      <ul className="text-white flex gap-16 justify-center h-full items-center bg-[#979797]/25 cursor-pointer">
        
        {pages && pages.map((page, index) => (
          
          <Link to={`/page/${page}`} key={index} className=" py-9 hover:border-b hover:border-b-white focus:border-b focus:border-b-white ">
            {page}

          </Link>
        ))}
      </ul>
    </nav>
  );
};
