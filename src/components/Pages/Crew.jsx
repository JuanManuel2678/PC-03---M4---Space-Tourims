import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import data from "/public/data.json";

export const Crew = () => {
  const [crew] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, role, bio } = crew[value];
  console.log(crew);
  return (
    <section className="flex gap-4 justify-center text-white w-screen h-full bg-[url('/crew/background-crew-desktop.jpg')] bg-cover pt-[130px]">

      <div className=" flex  w-full h-full">

        <article className=" text-center w-1/2 p-16 flex flex-col justify-around">

          <h2 className=" text-[28px] font-bold text-gray-500 tracking-wider text-left font-BarlowCondensed ">
            02
            <span className="ml-5 font-light text-[#ffffff] ">
              MEET YOUR CREW
            </span>
          </h2>

          <div className=" font-Bellefair text-left flex flex-col gap-5">

            <h3 className="text-gray-500 text-[32px] ">{(role).toUpperCase()}</h3>
            <h2 className="text-white text-[56px]">{(name).toUpperCase()}</h2>
            <p className="text-white text-[18px] w-[514px]">{bio}</p>

          </div>

          <ul className="flex items-left ">
            {crew.map((item, index) => (
              <li key={index} className="mr-5">
                <button
                  onClick={() => setValue(index)}
                  className={`text-gray-600 hover:text-white hover:rounded-full focus:text-white focus:rounded-full`}
                >
                  <BsCircleFill />
                </button>
              </li>
            ))}
          </ul>

        </article>

        <article className="w-1/2 h-full grid content-end ">

          <img
            src={`/crew/image-${name}.png`}
            alt={name}
            title={name}
            className=""
          />
        </article>

      </div>

    </section>
  );
};
