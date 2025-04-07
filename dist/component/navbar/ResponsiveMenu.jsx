import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
      <div
          className={`${
              showMenu ? "left-0" : "-left-[100%]"
          } h-screen w-[75%] bg-slate-950 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white`}
      >
        <div>
          <div className="flex items-center justify-start gap-3">
            <img src="/src/assets/logo.png" alt="Legacy Dev Team Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1>LEGACY DEVTEAM</h1>
              <h1 className="text-sm text-slate-500">GAME DEVELOPING COMMUNITY</h1>
            </div>
          </div>
          <nav className="mt-12">
            <ul className="space-y-4 text-xl">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contend Creators</a>
              </li>
              <li>
                <a href="#">Staff</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer">
          <h1>Copyright © 2025. All rights reserved by LEGACY DEV TEAM.</h1>
        </div>
      </div>
  );
};

export default ResponsiveMenu;
