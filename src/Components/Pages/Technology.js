import React from "react";
import { useState } from "react";
import data from "../data.json";


const Technology = () => {
  const [cards] = useState(data.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = cards[value];

  return (
    <div>
      <section className="home technology px-5">
        <h1
          className="pt-20 lg:pt-40 lg:max-w-7xl lg:mx-auto text-white text-3xl uppercase
        mb-2 md:text-3xl md:pt-40"
        >
          03 SPACE LAUNCH 101
        </h1>

        <div
          className="flex items-center justify-center flex-col-reverse lg:grid grid-cols-2 gap-5 
           md:items-center lg:max-w-7xl lg:mx-auto"
        >
          <article className="text-center lg:text-left lg:flex items-center">
            <div className="">
              {cards.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`uppercase text-white text-2xl p-2 border-2 
                border-white pb-2 m-2 rounded-full h-12 w-12 p-2 ${
                  index === value && "border-b border-white"
                }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="lg:ml-10">
              <h4 className="uppercase text-gray-400 mb-5 text-2xl">
                The terminology...
              </h4>
              <h2 className="text-5xl font-bold text-white my-5 mb-5 uppercase tracking-widest">
                {name}
              </h2>
              <p className="text-gray-400 pb-5 mb-5">{description}</p>
            </div>
          </article>
          <article>
            <picture>
              <source media="(min-width: 768px)" srcSet={images.portrait} />
              <img
                src={images.landscape}
                alt={name}
                title={name}
                className="block mx-auto  mb-10 "
              />
            </picture>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Technology;
