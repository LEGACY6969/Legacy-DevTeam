import React from "react";

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-[999999]">
            <div className="flex flex-col items-center">
                <img
                    src="/src/assets/logo.png"
                    alt="Loading..."
                    className="w-20 h-20 animate-pulse"
                />
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Loading...</p>

            </div>
        </div>
    );
};

export default Preloader;
