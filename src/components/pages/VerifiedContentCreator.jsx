import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VerifiedContentCreator = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    const creators = [
        {
            name: "LEGACY DEV TEAM",
            img: "/src/assets/streamers/img8.png",
            url: "",
        },
        {
            name: "DINGDONG GAMING",
            img: "/src/assets/streamers/img1.png",
            url: "https://www.youtube.com/@Dingdong_Gaming",
        },
        {
            name: "SINHALION GAMING",
            img: "/src/assets/streamers/img2.png",
            url: "https://www.youtube.com/@Sinhaliongaming1",
        },
        {
            name: "KenG GAMING",
            img: "/src/assets/streamers/img3.png",
            url: "https://www.youtube.com/@KenGSL",
        },
        {
            name: "GUNE STREAM",
            img: "/src/assets/streamers/img4.png",
            url: "https://www.youtube.com/@gune96",
        },
        {
            name: "SH4GY STREAM",
            img: "/src/assets/streamers/img5.png",
            url: "https://www.youtube.com/channel/UCDBGlw9fmvVZwv2fiH6b6Kw",
        },
        {
            name: "C4N STREAM",
            img: "/src/assets/streamers/img6.png",
            url: "https://www.youtube.com/@c4nxd",
        },
        {
            name: "DEXTER GAMING",
            img: "/src/assets/streamers/img7.png",
            url: "https://www.youtube.com/@dextergaming69",
        },
    ];

    return (
        <div className="dark:bg-gray-900 dark:text-white py-10">
            <section className="container mx-auto px-4">
                <h1 className="text-center text-4xl font-bold mb-6">
                    VERIFIED CONTENT CREATOR
                </h1>
                <div className="flex justify-center flex-wrap gap-6">
                    {creators.map((creator, index) => (
                        <div
                            key={index}
                            className="w-full max-w-xs bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-br-sm shadow-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-blue-600/40"
                            data-aos="fade-up"
                        >
                            <div className="mb-4 flex justify-center">
                                <img
                                    src={creator.img}
                                    alt={`${creator.name} Profile`}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {creator.url ? (
                                        <a
                                            href={creator.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {creator.name}
                                        </a>
                                    ) : (
                                        creator.name
                                    )}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default VerifiedContentCreator;
