
import React from 'react';
import { useParams } from 'react-router';
import { properties } from '../assets/dummyData';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import Rate from "../components/Rate";
import { Star, MapPin, Wifi, AirVent, Car, Share, Heart } from 'lucide-react';

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) {
        return <div>Property not found</div>;
    }

    // Dummy amenities for demonstration
    const amenities = [
        { name: 'Wifi', icon: <Wifi size={20} /> },
        { name: 'Kitchen', icon: <p></p> },
        { name: 'Air conditioning', icon: <AirVent size={20} /> },
        { name: 'Free parking', icon: <Car size={20} /> },
    ];

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                {/* Title and Location */}
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-semibold mb-2">{property.name}</h1>
                    <div className="flex gap-3 items-center text-sm text-gray-600 mb-4">
                        <p className='flex gap-1'><p className='font-bold underline'>shere</p><Share size={20} /></p>
                        <p className='flex gap-1 justify-center items-center'><p className='font-bold underline'>save</p> <Heart size={20} /></p>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl overflow-hidden mb-8">
                    <div className="md:col-span-2 lg:col-span-2">
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden md:grid grid-cols-2 gap-4 lg:col-span-2">
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='flex justify-between items-center mb-6'>
                    <p className='text-2xl font-bold'>Entire rental unit in {property.location}</p>
                    <div className='flex justify-center border border-gray-300 items-center shadow-2xl h-13 p-3 rounded-xl w-1/3'>
                        <img className='h-10' src={'/tag (1).png'} alt="" />
                        <p className='font-bold'>Prices include all feesPrice</p>
                    </div>
                </div>

                <div className='flex border items-center border-gray-300 p-2 lg:w-1/2'>
                    <img className='h-16' src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png" alt="" />
                    <p className='text-center font-semibold'>Gest <br /> favourite</p>
                    <img className='h-16' src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/33b80859-e87e-4c86-841c-645c786ba4c1.png" alt="" />
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2">
                        {/* Host Info */}
                        <div className="flex items-center border-b pb-6 mb-6">
                            <img
                                src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
                                alt="Host"
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">Hosted by John Doe</h2>
                                <p className="text-gray-600">Superhost · 2 years hosting</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-b pb-6 mb-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <button className="font-semibold underline mt-4">Show more</button>
                        </div>

                        {/* What this place offers (Amenities) */}
                        <div className="border-b pb-6 mb-6">
                            <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center text-gray-800">
                                        {amenity.icon}
                                        <span className="ml-2">{amenity.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Where you'll be</h2>
                            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                Map Placeholder
                            </div>
                            <p className="text-gray-700 mt-2">{property.location}</p>
                        </div>
                    </div>

                    {/* Right Column - Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 border border-gray-300 rounded-xl shadow-lg p-6">
                            <div className="mb-4">
                                <span className="text-2xl font-bold underline">${property.price}</span>
                                <p>for 2 nights</p>

                            </div>

                            <div className="border rounded-lg mb-4">
                                <div className="grid grid-cols-2 border-b">
                                    <div className="p-3 border-r">
                                        <label className="block text-xs font-bold">CHECK-IN</label>
                                        <input type="date" className="w-full text-sm" />
                                    </div>
                                    <div className="p-3">
                                        <label className="block text-xs font-bold">CHECKOUT</label>
                                        <input type="date" className="w-full text-sm" />
                                    </div>
                                </div>
                                <div className="p-3">
                                    <label className="block text-xs font-bold">GUESTS</label>
                                    <select className="w-full text-sm p-1">
                                        <option>1 guest</option>
                                        <option>2 guests</option>
                                        <option>3 guests</option>
                                        <option>4 guests</option>
                                    </select>
                                </div>
                            </div>
                            <Rate />
                            <br />
                            <button className="w-full bg-[#FF385C] text-white p-3 rounded-lg font-semibold text-lg hover:bg-[#e03050] transition-colors duration-200">
                                Check availability
                            </button>

                            <div className="mt-4 text-center text-sm text-gray-600">
                                You won't be charged yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PropertyDetails;
