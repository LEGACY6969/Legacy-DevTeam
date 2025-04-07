import React, { useState, useEffect } from "react";
import "../../assets/style/simplebanner.css"; // Use this relative path

const SimpleBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/vPrQj1j8BbE?si=Oax0JC5mWP7k1M0L",
    "https://www.youtube.com/embed/VGJ6kCGkCrc?si=GCyI32MYz7SjCX_S",
    "https://www.youtube.com/embed/XJgUWU812ig?si=znOA7p_vj7Ioez7j",
    "https://www.youtube.com/embed/MefuU4IFWpY?si=qFCuA5yFkMt0Jtem",
    "https://www.youtube.com/embed/XJgUWU812ig?si=znOA7p_vj7Ioez7j",
  ];

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [videos.length]);

  return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-950">
        <div data-aos="fade-up" className="container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2 relative">
              {/* Carousel container */}
              <div className="carousel-container">
                <iframe
                    className="aspect-video w-full transition-all duration-300"
                    src={videos[currentSlide]}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left">
              <h1 className="text-3xl font-bold">
                Latest Live Streames In Legacy Roleplay
              </h1>
              <p>
                Join the latest Legacy Roleplay live stream, where you can experience an immersive, interactive world full of thrilling adventures and dynamic characters. Whether you're a seasoned roleplayer or new to the community, there's something for everyone. Don't miss out on the fun—tune in and become part of the action!
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SimpleBanner;
