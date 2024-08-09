import { useState } from "react"
import data from '/public/data.json'


export const Destination = () => {
    const [planets] = useState(data.destinations)
    const [value, setValue] = useState(0)

    const { name, description, distance, travel } = planets[value]
    console.log(planets)

  return (
    <section className="flex gap-4 justify-center text-white w-screen h-full bg-[url('/destination/background-destination-desktop.jpg')] bg-cover pt-[130px]" >

        <div className="flex w-full ">

          <article className="w-1/2 p-10 flex flex-col justify-around">
            <h2 className="text-[28px] font-bold text-gray-500 tracking-wider text-left font-BarlowCondensed">
              01
              <span className="ml-5 font-light text-[#ffffff]">PICK YOUR DESTINATION</span>
            </h2>

            <img
              src={`/destination/image-${name}.png`}
              alt={name}
              title={name}
              className="block mx-auto"
            />
          </article>

          <article className="w-1/2 p-20 flex flex-col justify-center gap-10">
            <ul className="flex items-left mb-10 ">
              {planets.map((item, index) => (
                <li key={index} className=" flex gap-5 mr-5 t text-[#ffffff] text-[28px]">
                  <button
                    onClick={() => setValue(index)}
                    className={`uppercase font-light font-BarlowCondensed font-ligh tracking-wider text-gray-400  hover:border-b hover:border-b-white focus:border-b focus:border-b-white`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className=" text-[76px] font-light text-4xl font-Bellefair uppercase tracking-widest mb-5">
              {name}
            </h2>

            <p className="text-gray-400 border-b border-gray-400/50 pb-5 text-[18px] w-[514px">
              {description}
            </p>

            <ul className="flex flex-wrap items-center justify-between pt-5">
              <li className="uppercase font-light font-BarlowCondensed font-ligh tracking-wider text-gray-400">
                Avg. Distance<span className="text-4xl block font-BarlowCondensed font-light text-white">{distance}</span>
              </li>
              <li className="uppercase font-light font-BarlowCondensed font-ligh tracking-wider text-gray-400">
                Est. travel time<span className="text-4xl block font-BarlowCondensed font-light text-white">{travel}</span>
              </li>
            </ul>
          </article>

        </div>
        
      
       
      
    </section>
  )
}


