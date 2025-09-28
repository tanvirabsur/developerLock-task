
import React, { useState } from 'react';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Stays');

    return (
        <header className="p-4 bg-[#FAFAFA]">
            <div className="flex justify-between items-center bg-">
                <div className="flex items-center">
                    <img src="/vite.svg" alt="Airbnb logo" className="h-8 w-auto" />
                    <span className="font-bold text-2xl text-red-500 ml-2">airbnb</span>
                </div>
                <div className="flex items-center">
                    <a href="#" className="mr-4">Become a host</a>
                    <button className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.55 12H20.45" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.55V21.45" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                        </svg>
                    </button>
                    <button className="flex items-center border rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-4 shadow-inherit">
                <div className="flex  rounded-full p-1">
                    <button onClick={() => setActiveTab('Stays')} className={`px-4 py-2 rounded-full ${activeTab === 'Stays' ? 'bg-white shadow-md' : ''}`}>Stays</button>
                    <button onClick={() => setActiveTab('Experiences')} className={`px-4 py-2 rounded-full ${activeTab === 'Experiences' ? 'bg-white shadow-md' : ''}`}>Experiences</button>
                    <button onClick={() => setActiveTab('Online Experiences')} className={`px-4 py-2 rounded-full ${activeTab === 'Online Experiences' ? 'bg-white shadow-md' : ''}`}>Online Experiences</button>
                </div>
            </div>
            <div className="flex justify-center mt-4 p-5">
                <div className="flex items-center rounded-full p-2 shadow-md">
                    <div className="px-4">
                        <label className="block text-xs font-bold">Where</label>
                        <input type="text" placeholder="Search destinations" className="outline-none" />
                    </div>
                    <div className="border-l px-4">
                        <label className="block text-xs font-bold">Check in</label>
                        <input type="text" placeholder="Add dates" className="outline-none" />
                    </div>
                    <div className="border-l px-4">
                        <label className="block text-xs font-bold">Check out</label>
                        <input type="text" placeholder="Add dates" className="outline-none" />
                    </div>
                    <div className="border-l px-4">
                        <label className="block text-xs font-bold">Who</label>
                        <input type="text" placeholder="Add guests" className="outline-none" />
                    </div>
                    <button className="bg-red-500 text-white rounded-full p-2 ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
