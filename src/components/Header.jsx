
import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 shadow-md">
            <div className="flex items-center">
                {/* <img src="/vite.svg" alt="Airbnb logo" classNam/e="h-8 w-auto" /> */}
                <span className="font-bold text-2xl text-red-500 ml-2">airbnb</span>
            </div>
            <div className="flex items-center border rounded-full p-2">
                <input type="text" placeholder="Start your search" className="outline-none" />
                <button className="bg-red-500 text-white rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <div className="flex items-center">
                <a href="#" className="mr-4">Become a host</a>
                <button className="flex items-center border rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
