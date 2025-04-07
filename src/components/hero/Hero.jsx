import React, { useEffect, useState } from "react";
import Hero1 from "../../assets/about/img1.png";
import Hero2 from "../../assets/about/img2.png";
import Hero3 from "../../assets/about/img3.png";
import Hero4 from "../../assets/about/img4.png";
import Hero5 from "../../assets/about/img5.png";
import Hero6 from "../../assets/about/img6.png";

const images = [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="relative h-[650px] md:h-[600px]">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
              <img
                  key={index}
                  src={img}
                  alt={`Slide ${index}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              />
          ))}
          {/* Optional dark overlay + gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-blue-950/70 z-10" />
        </div>

        {/* Content */}
        <section className="relative z-20 h-full pt-32 md:pt-48">
          <div className="container mx-auto flex flex-col items-center justify-between h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
              {/* Hero Text */}
              <div
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className="flex flex-col items-center text-center gap-4 md:items-start md:text-left"
              >
                <h1 className="text-4xl font-bold">
                  Sri-Lankan Leading Game Development Community
                </h1>
                <p className="text-lg">
                  Sri Lanka’s premier game development community, uniting passionate
                  creators to build immersive multiplayer experiences, share
                  knowledge, and shape the future of gaming together.
                </p>
                <div className="space-x-4">
                  <button className="btn-primary">About Us</button>
                  <button className="btn-outline">Contact</button>
                </div>
              </div>

              {/* Optionally: You can add something else here */}
              <div className="hidden md:block" />
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
