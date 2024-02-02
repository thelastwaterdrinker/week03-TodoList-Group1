"use client";

import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

interface Slide {
  url: string;
  title: string;
}

interface Props {
  slides: Slide[];
}

/* Image Slider and Button */
function ImageSlider({ slides }: Props) {
  return (
    <Carousel loop autoplay placeholder={""}>
      {slides.map((slide) => {
        return (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                bottom: 50,
                width: "100%",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="text-white text-4xl cursor-pointer pb-5">
                New Arrivals
              </div>
              <Button size="lg" placeholder={""}>
                Shop Now
              </Button>
            </div>
            <img
              src={slide.url}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </>
        );
      })}
    </Carousel>
  );
}

export default ImageSlider;
