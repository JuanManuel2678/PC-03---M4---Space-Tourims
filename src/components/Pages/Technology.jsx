import { useState } from "react";
import data from "/public/data.json";

export const Technology = () => {
  const [technology] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, description } = technology[value];
  console.log(technology);
  return (
    <section className="flex gap-4 justify-center text-white w-screen h-full bg-[url('/technology/background-technology-desktop.jpg')] bg-cover pt-[130px]">

      <div className="flex w-full h-full">

        <article className=" text-left w-1/2 p-16 flex flex-col justify-around">

          <h2 className="text-[28px] font-bold text-gray-500 tracking-wider text-left font-BarlowCondensed">
            03
            <span className="ml-5 font-light text-[#ffffff]">SPACE LAUNCH 101</span>
          </h2>

          <div className=" font-Bellefair text-left flex gap-5">
            <article className="font-Bellefair text-left flex gap-50">
              <ul
                className="flex flex-col gap-5"
                start="1"
              >
                {technology.map((item, index) => (
                  <li key={index} className="f mr-5 ">
                    <button
                      onClick={() => setValue(index)}
                      className={`border rounded-full w-16 h-16 text-white text-4xl font-Bellefair hover:bg-white/30 focus:bg-white focus:text-black`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </article>

            <article className="font-Bellefair text-left flex flex-col gap-5">

              <h3 className="text-gray-500 text-[32px]">
                THE TERMINOLOGY...
              </h3>

              <h2 className="text-white text-[56px]">
                {(name).toUpperCase()}
              </h2>

              <p className="text-white text-[18px] w-[514px]">{description}</p>
            </article>
          </div>

        </article>

        <article className="w-1/2 flex justify-center items-center">
          <img
            src={`/technology/image-${name}.jpg`}
            alt={name}
            title={name}
            className="drop-shadow-2xl"
          />
        </article>

      </div>

    </section>
  );
};
