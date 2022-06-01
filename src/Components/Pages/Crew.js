import React from "react";
import { useState } from "react";
import data from "../data.json";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Crew = () => {
  const [people] = useState(data.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = people[value];

  return (
    <div>
      <section className="home crew px-5">
        <h1
          className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-3xl uppercase
        mb-10 md:text-3xl md:pt-40"
        >
          02 Meet your Crew
        </h1>

        <div className="flex items-center justify-center flex-col-reverse lg:grid grid-cols-2 gap-5 
        md:items-center lg:max-w-7xl lg:mx-auto h-full">
          <article className="text-center lg:text-left">
            <h4 className="uppercase text-gray-400 mb-5 text-2xl">{role}</h4>
            <h2 className="text-4xl font-bold text-white  mb-5 uppercase tracking-widest">
              {name}
            </h2>
            <p className="text-gray-400 pb-5 mb-1">{bio}</p>
            {people.map((item,index) => (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`uppercase text-white text-2xl pb-2
                mx-2 ${index === value && "border-b border-white"}`}
              >
                <CircleOutlinedIcon/>
              </button>
            ))}
          </article>
          <article>
            <img
              src={images.png}
              alt={name}
              title={name}
              className="block mx-auto w-1/2 mb-10 pb-10"
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Crew;
