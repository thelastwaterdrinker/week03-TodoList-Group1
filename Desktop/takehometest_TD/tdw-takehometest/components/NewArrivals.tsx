import React from "react";
import ImageSlider from "./ImageSlider";

const NewArrivals = () => {
  {/* New Arrival Slide URLs */}
  const slides = [
    { url: "http://localhost:3000/newArrivals1.jpg", title: "newArrival1" },
    { url: "http://localhost:3000/newArrivals2.jpg", title: "newArrival2" },
    { url: "http://localhost:3000/newArrivals3.jpg", title: "newArrival3" },
    { url: "http://localhost:3000/newArrivals4.jpg", title: "newArrival4" },
    { url: "http://localhost:3000/newArrivals5.jpg", title: "newArrival5" },
  ];

  return (
    <section>
      <div className="h-80 md:h-96 lg:h-120 xl:h-160" style={{ height: 480 }}>
        <ImageSlider slides={slides} />
      </div>
      <div style={{padding: 24}} className="container-sm md:container-md lg:container-lg padding-container text-lg md:text-xl lg:text-3xl text-center">
        Transform ordinary moments into extraordinary memories - our bags are
        designed to accompany you on every step of your remarkable journey.
      </div>
    </section>
  );
};

export default NewArrivals;
