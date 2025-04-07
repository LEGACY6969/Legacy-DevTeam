import React from "react";
import {
  FaDiscord,
  FaFacebook, FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow, FaMailBulk, FaMailchimp,
  FaMobileAlt, FaVoicemail, FaYoutube,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const importantLinks = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Streamers",
    },
  ];

  const Links = [
    {
      name: "Privacy Policy",
    },
    {
      name: "Streamers",
    },
    {
      name: "About us",
    },
  ];
  return (
    <>
      <footer className="text-white rounded-t-3xl bg-gradient-to-r from-blue-500 to-blue-950 ">
        <div className="mx-auto max-w-[1200px] p-4">
          {/* Footer Containt section */}
          <div className="grid py-5 md:grid-cols-3">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
                <a href="/#home" className="text-primary">
                  LEGACY <span className="inline-block font-bold text-primary">
                    DEV TEAM
                  </span>
                </a>
              </h1>
              <p className="">
                The Legacy Dev Team enhances and maintains long-standing software systems...{" "}
              </p>
              <br />
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Southern Province,SriLanka</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMailBulk />
                <p>legacyroleplay.6969@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <FooterLinks links={importantLinks} />
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <FooterLinks links={Links} />
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to out newsletter</h1>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <div className="flex gap-3 mt-6 items-center">
                    <a href="https://github.com/LEGACY6969" className="duration-200 hover:scale-105">
                      <FaGithub className="text-3xl" />
                    </a>
                    <a href="https://www.youtube.com/@LegacyDevTeam69" className="duration-200 hover:scale-105">
                      <FaYoutube className="text-3xl" />
                    </a>
                    <a href="https://discord.gg/dUPwqtDAkz" className="duration-200 hover:scale-105">
                      <FaDiscord className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer copyright section */}
          <div className="bottom-footer">
            <p className="border-t-2 border-gray-300/50 py-6 text-center">
              Copyright © 2025. All rights reserved by LEGACY DEV TEAM.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
