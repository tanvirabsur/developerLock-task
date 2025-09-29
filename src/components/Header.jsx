
import { Menu, TextAlignJustify } from 'lucide-react';
import React, { useState } from 'react';

const Header = () => {
    const [activeTab, setActiveTab] = useState('Stays');

    return (
        <header className="p-3 bg-[#FAFAFA]">
            <div className="flex justify-between items-center bg-">
                <div className="flex items-center">
                    {/* <img src="/vite.svg" alt="Airbnb logo" className="h-8 w-auto" /> */}
                    <span className="font-bold text-2xl text-red-500 ml-2 hover:bg-[#EBEBEB]">airbnb</span>
                </div>
                <div className="flex justify-center mt-4 shadow-inherit">
                    <div className="flex  rounded-full p-1">
                        <button onClick={() => setActiveTab('Stays')} className={`px-4 py-2 rounded-full ${activeTab === 'Stays' ? 'bg-white shadow-md' : ''}`}>Stays</button>
                        <button onClick={() => setActiveTab('Experiences')} className={`px-4 py-2 rounded-full ${activeTab === 'Experiences' ? 'bg-white shadow-md' : ''}`}>Experiences</button>
                        <button onClick={() => setActiveTab('Online Experiences')} className={`px-4 py-2 rounded-full ${activeTab === 'Online Experiences' ? 'bg-white shadow-md' : ''}`}>Online Experiences</button>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#" className="mr-4">Become a host</a>
                    <button className="rounded-full bg-[#EBEBEB] p-1.5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                    </button>
                    <button className="rounded-full bg-[#EBEBEB] p-2.5 cursor-pointer ">
                        <TextAlignJustify size={18} />
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <div className="flex items-center rounded-full p-5 shadow-2xl">
                    <div className="px-4">
                        <label className="block text-xs font-bold">Where</label>
                        <input type="text" placeholder="Search destinations" className="outline-none" />
                    </div>
                    <div className="border-l px-4">
                        <label className="block text-xs font-bold">Check in</label>
                        <input type="text" placeholder="Add dates" className="outline-none" />
                    </div>
                    <div className="border-l border-b-accent px-4">
                        <label className="block text-xs font-bold">Check out</label>
                        <input type="text" placeholder="Add dates" className="outline-none" />
                    </div>
                    <div className="border-l px-4">
                        <label className="block text-xs font-bold">Who</label>
                        <input type="text" placeholder="Add guests" className="outline-none" />
                    </div>
                    <div className=''>
                        <button className="bg-red-500 text-white rounded-full p-2 ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
