import React from "react";
import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
      <section className="container h-12 md:h-32 p-3">
        <div
            className="mx-auto my-4 grid w-full -translate-y-12 grid-cols-4 divide-x divide-slate-700 rounded-3xl border border-red-500 bg-white p-10 shadow-3xl dark:border-red-600 dark:bg-gray-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-20 md:p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp end={650} suffix="+" duration={2.75}/>
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">Members</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp end={64} suffix="+" duration={2.75}/>
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">Premium Resources</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp end={29} suffix="+"/>
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">Streamers</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
              <CountUp
                  start={-1}
                  end={20}
                  duration={2.75}
                  separator=" "
                  suffix="+"
              />
            </h1>
            <h1 className="sm:text-md text-xs md:text-lg">Staff</h1>
          </div>
        </div>
      </section>

  );
};

export default OverviewCounter;
