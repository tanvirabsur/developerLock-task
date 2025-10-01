
import React, { useState } from 'react';

const filters = [
    { name: 'Amazing views', icon: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' },
    { name: 'Tiny homes', icon: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg' },
    { name: `Chef's kitchens`, icon: 'https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b6bb156.jpg'},
    { name: 'Surfing', icon: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg' },
    { name: 'Mansions', icon: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg' },
    { name: 'Luxe', icon: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b9.jpg' },
    { name: 'Treehouses', icon: 'https://a0.muscache.com/pictures/4d4a447e-46c8-4162-9264-30d1532c0394.jpg' },
    { name: 'Camping', icon: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg' },
];

const Filters = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    return (
        <div className="flex items-center justify-between p-4 border-b sticky top-20 bg-white z-40">
            <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                {filters.map(filter => (
                    <button 
                        key={filter.name} 
                        onClick={() => setActiveFilter(filter.name)}
                        className={`flex flex-col items-center space-y-2 pb-2 border-b-2 transition-colors duration-200
                            ${activeFilter === filter.name 
                                ? 'border-black text-black' 
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                        <img src={filter.icon} alt={filter.name} className="h-6 w-6" />
                        <span className="text-xs font-medium whitespace-nowrap">{filter.name}</span>
                    </button>
                ))}
            </div>
            <button className="flex items-center border rounded-lg px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200 ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 10h12M3 16h6" />
                </svg>
                <span>Filters</span>
            </button>
        </div>
    );
};

export default Filters;
