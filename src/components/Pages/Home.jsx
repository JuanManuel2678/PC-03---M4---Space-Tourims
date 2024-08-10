import { Link } from 'react-router-dom'

export const Home = () => {

  return (
    
    <main className="flex gap-4 justify-center text-white w-screen h-full  bg-[url('/home/background-home-desktop.jpg')] bg-cover pt-[190px] ">

      <div className="w-1/2 h-full p-2 flex items-center justify-center ">

        <div className="w-[450px] h-[382px] flex-col justify-center items-center">
          <h2 className="font-BarlowCondensed text-[28px] text-[#d0d6f9]">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="font-Bellefair text-[150px] text-[#ffffff]">SPACE</h1>
          <h3 className="font-Barlow text-[18px] text-[#d0d6f9]">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h3>
        </div>

      </div>

      <div className="w-1/2 flex justify-center items-center ">

          <Link to='/page/01 DESTINATION'>
               <div className="bg-white text-black rounded-full w-[274px] h-[274px] flex justify-center items-center text-[32px] font-Bellefair">
               EXPLORE
               </div>
          </Link>

      </div>

    </main>
  );
};
