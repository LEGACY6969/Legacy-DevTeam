import React, { useEffect, useState } from "react";

const imageList1 = [
  "./src/assets/about/img1.png",
  "./src/assets/about/img2.png",
  "./src/assets/about/img3.png",
  "./src/assets/about/img4.png",
  "./src/assets/about/img5.png",
];

const imageList2 = [
  "./src/assets/about/img6.png",
  "./src/assets/about/img7.png",
  "./src/assets/about/img8.png",
  "./src/assets/about/img9.png",
  "./src/assets/about/img10.png",
];

const BannerDetails = ({ reverse }) => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % imageList1.length);
    }, 3000); // change image every 3 seconds

    const timer2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % imageList2.length);
    }, 3500);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
      <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        {/* First Section */}
        <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className={`flex flex-col items-start gap-4 text-left md:items-start p-4 md:p-8 md:text-left ${
                    reverse ? "md:order-last" : ""
                } `}
            >
              <h1 className="text-2xl md:text-4xl">
                We Build the Best RP Server Experience on Legacy Roleplay!
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlock the Ultimate Roleplay Experience with Cutting-Edge Systems
                and Premium Features!
              </p>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">
                  Police MDT & Jail System – Complete law enforcement tools
                </li>
                <li className="font-medium">
                  Best Inventory System – Smooth and realistic inventory
                  management
                </li>
                <li className="font-medium">
                  Dealership (Carshop) System – Buy, sell, seize, etc. vehicles
                  with in-game UI
                </li>
                <li className="font-medium">
                  GTA-V Animations Added AnimPanel – Realistic animations for
                  better RP
                </li>
                <li className="font-medium">etc...</li>
              </ul>
            </div>

            <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className={reverse ? "order-1" : ""}
            >
              <img
                  src={imageList1[index1]}
                  alt="Auto Banner"
                  className="mx-auto w-full p-4 md:max-w-[800px] rounded-2xl shadow-2xl transition-all duration-700 border-2"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-once="true"
                className="flex flex-col items-start gap-4 text-left md:items-start p-4 md:p-8 md:text-left md:order-last"
            >
              <h1 className="text-2xl md:text-4xl">
                Best Premium Jobs – High-quality RP jobs with immersive features!
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Unlock the Ultimate Roleplay Experience with Cutting-Edge Systems
                and Premium Features!
              </p>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">Airline Job – Fly planes & transport passengers</li>
                <li className="font-medium">Farmer Job – Grow crops & sell them</li>
                <li className="font-medium">Fisherman Job – Catch fish & sell them</li>
                <li className="font-medium">Business System – Do Your own Business</li>
                <li className="font-medium">Government Jobs & etc...  </li>
              </ul>
            </div>

            <div
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-once="true"
                className="order-1"
            >
              <img
                  src={imageList2[index2]}
                  alt="Auto Banner 2"
                  className="mx-auto w-full p-4 md:max-w-[800px] rounded-2xl shadow-2xl transition-all duration-700 border-2"
              />
            </div>
          </div>
        </div>

      </section>
  );
};

export default BannerDetails;
