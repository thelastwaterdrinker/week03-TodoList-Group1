import React from "react";

const TypesOfBags = () => {
  
    /* URL to images */
  const types_of_bags = [
    {
      url: "http://localhost:3000/ourFavorites1.jpg",
      title: "ourFavorites1",
      description: "Timeless Classics",
    },
    {
      url: "http://localhost:3000/ourFavorites2.jpg",
      title: "ourFavorites2",
      description: "Urban Explorer",
    },
    {
      url: "http://localhost:3000/ourFavorites3.jpg",
      title: "ourFavorites3",
      description: "Modern Minimalist",
    },
    {
      url: "http://localhost:3000/ourFavorites5.jpg",
      title: "ourFavorites4",
      description: "Retro Revival",
    },
  ];

  return (
    <section>
      {/* Section design */}
      <div className="flex flex-wrap justify-center p-10">
        {types_of_bags.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/2"
          >
            <img
              className="w-full h-auto max-h-80 object-cover"
              src={item.url}
              alt={item.title}
            />
            <div className="text-center mt-4 pb-10">
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesOfBags;
