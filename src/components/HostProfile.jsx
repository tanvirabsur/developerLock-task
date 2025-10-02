import React from 'react';

// --- Icon Definitions (Lucide Icons adapted for JSX) ---
const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#FF5A5F]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const TrophyIcon = (props) => (
    <svg className="w-4 h-4 mr-1 text-gray-500" style={{ fill: 'white', stroke: '#888888' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
         <path d="M12 11.62C7.38 11.62 5 13.92 5 17.5V19h14v-1.5C19 13.92 16.62 11.62 12 11.62zM12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4zM21 8h-2v3h2v-3zM3 8H5v3H3V8z"/>
    </svg>
);

const MapPinIcon = () => (
    <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ShieldIcon = () => (
    <svg className="w-5 h-5 text-[#FF5A5F] mr-3 mt-0.5 min-w-[1.25rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);
// --- End Icon Definitions ---


const HostProfile = ({host,extraOne,extraTwo}) => {
    console.log(extraOne,extraTwo);
    // Define custom colors locally for easy reference in inline styles where necessary
    const airbnbDark = '#222222';
    // const airbnbRed = '#FF5A5F';

    return (
        <div className="bg-gray-50  md:p-8 font-sans">
            <div className="mx-auto py-8">
                {/* Main Header */}
                <h2 className="text-2xl font-semibold mb-8" style={{ color: airbnbDark }}>Meet your host</h2>

                <div className="flex flex-col md:flex-row gap-x-16 gap-y-8">
                    {/* 1. Host Profile Card (Left Side) */}
                    <div className="w-full md:w-1/3 p-6 border border-gray-200 rounded-xl shadow-md bg-white flex flex-col items-start space-y-4">

                        {/* Profile Picture and Verified Badge */}
                        <div className="relative mx-auto">
                            {/* Placeholder Image (Using inline style for the gradient border effect) */}
                            <img
                                src={host.profileImage}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/A020F0/ffffff?text=Host'; }}
                                alt="Ken Tat's profile"
                                className="w-28 h-28 rounded-full object-cover border-4 border-gray-100"
                                style={{ backgroundImage: 'linear-gradient(to right, #FF5A5F, #8A2BE2)' }}
                            />
                            {/* Verified Check Mark */}
                            <div className="absolute bottom-0 right-0 p-1 bg-white rounded-full border border-gray-200 shadow-md">
                                <CheckIcon />
                            </div>
                        </div>

                        {/* Host Name and Title */}
                        <div className="text-center w-full space-y-1 mt-4">
                            <h3 className="text-xl font-semibold" style={{ color: airbnbDark }}>{host.name}</h3>
                            <div className="flex items-center justify-center text-sm text-gray-600">
                                <TrophyIcon />
                                <span className="font-medium">Superhost</span>
                            </div>
                        </div>

                        {/* Stats Section (Reviews, Rating, Years) */}
                        <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-4 mt-4 w-full text-center">
                            {/* Stat 1: Reviews */}
                            <div>
                                <p className="text-lg font-semibold" style={{ color: airbnbDark }}>{extraTwo}</p>
                                <p className="text-xs text-gray-500">Reviews</p>
                            </div>

                            {/* Stat 2: Rating */}
                            <div>
                                <p className="text-lg font-semibold" style={{ color: airbnbDark }}>
                                    {extraOne}
                                    <span className="ml-1 text-sm text-black">★</span>
                                </p>
                                <p className="text-xs text-gray-500">Rating</p>
                            </div>

                            {/* Stat 3: Years Hosting */}
                            <div>
                                <p className="text-lg font-semibold" style={{ color: airbnbDark }}>3</p>
                                <p className="text-xs text-gray-500">Years hosting</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Host Details and Actions (Right Side) */}
                    <div className="w-full md:w-2/3 space-y-6">
                        {/* Superhost Title and Description */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: airbnbDark }}>Ken Tat is a Superhost</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                            </p>
                        </div>

                        {/* Host Details */}
                        <div className="space-y-3">
                            <h4 className="text-base font-semibold" style={{ color: airbnbDark }}>Host details</h4>
                            <p className="text-gray-700">
                                <span className="font-medium">Response rate:</span> 100%
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">Responds:</span> within an hour
                            </p>
                        </div>

                        {/* Message Host Button */}
                        <button className="bg-white border border-gray-900 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition duration-150">
                            Message host
                        </button>
                    </div>
                </div>

                {/* 3. Footer/Location & Safety Info */}
                <div className="mt-8 pt-6 space-y-6 border-t border-gray-200">
                    {/* Location */}
                    <div className="flex items-center text-gray-700">
                        <MapPinIcon />
                        <span className="font-medium">Lives in Kuala Lumpur, Malaysia</span>
                    </div>

                    {/* Payment Safety Note */}
                    <div className="flex items-start text-sm text-gray-500 p-4 rounded-lg" style={{ backgroundColor: '#fff0f2' }}>
                        <ShieldIcon />
                        <span>
                            To help protect your payment, always use Airbnb to send money and communicate with hosts.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostProfile;

