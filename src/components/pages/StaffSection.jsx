import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StaffSection = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="dark:bg-gray-900 dark:text-white py-10">
            <section className="container mx-auto px-4" data-aos="fade-up">
                <h1 className="text-center text-4xl font-bold mb-6">
                    OUR DEDICATED STAFF
                </h1>
                <div className="flex justify-center flex-wrap gap-4">
                    {[
                        {
                            name: "KALANA NIMSARA",
                            role: "FOUNDER",
                            img: "./src/assets/STAFF/staff1.png",
                        },
                        {
                            name: "ISURU UDARA(BUG ISURU)",
                            role: "CO-FOUNDER",
                            img: "./src/assets/STAFF/staff2.png",
                        },
                        {
                            name: "VIDURA VIDARSHANA",
                            role: "CO-FOUNDER",
                            img: "./src/assets/STAFF/staff3.png",
                        },
                        {
                            name: "iTz_mE_VihanGa",
                            role: "MAIN|WEB DEVELOPER",
                            img: "./src/assets/STAFF/staff4.png",
                        },
                        {
                            name: "GINETH FERNANDO",
                            role: "MAIN DEVELOPER",
                            img: "./src/assets/STAFF/staff5.png",
                        },
                        {
                            name: "THISURA DILANKA",
                            role: "HEAD ADMIN",
                            img: "./src/assets/STAFF/staff6.png",
                        },
                        {
                            name: "THEEKSHANA SARANGA",
                            role: "HEAD ADMIN",
                            img: "./src/assets/logo.png",
                        },
                        {
                            name: "CHAMATHKA ARUNA (DOOMA)",
                            role: "HEAD ADMIN",
                            img: "./src/assets/logo.png",
                        },
                        {
                            name: "ISARA JAYAWARDANA",
                            role: "HEAD ADMIN",
                            img: "./src/assets/STAFF/staff9.png",
                        },
                        {
                            name: "KASUN DHANANJAYA",
                            role: "HEAD ADMIN",
                            img: "/src/assets/logo.png",
                        },
                        {
                            name: "LIL TONY",
                            role: "ANTI-CHEAT DEVELOPER",
                            img: "./src/assets/logo.png",
                        },
                        {
                            name: "PASINDU SHEHARA",
                            role: "MUSIC DIRECTOR",
                            img: "./src/assets/STAFF/staff12.png",
                        },
                        {
                            name: "HEASAN SAMUDIKA",
                            role: "GRAPHIC DESIGNER",
                            img: "./src/assets/STAFF/staff13.png",
                        },
                        {
                            name: "MADURINDA JAYASOORIYA",
                            role: "SENIOR ADMIN",
                            img: "./src/assets/logo.png",
                        },
                        {
                            name: "SENU",
                            role: "JUNIOR ADMIN",
                            img: "./src/assets/logo.png",
                        },
                        {
                            name: "HIRUTH SENAVIRATHNA",
                            role: "CONTEND CREATOR",
                            img: "./src/assets/STAFF/staff16.png",
                        },
                    ].map((staff, index) => (
                        <div
                            key={index}
                            className="w-60 bg-white dark:bg-slate-800 text-gray-800 dark:text-white shadow-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-blue-600/40"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="flex justify-center mb-3">
                                <img
                                    src={staff.img}
                                    alt={staff.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-semibold">{staff.name}</h2>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {staff.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default StaffSection;
