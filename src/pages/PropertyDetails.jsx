
import React from 'react';
import { useParams } from 'react-router';
import { properties } from '../assets/dummyData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDetails = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="max-w-7xl mx-auto p-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold">{property.name}</h1>
                    <div className="flex items-center mt-2">
                        <span className="text-red-500">★ {property.rating}</span>
                        <span className="ml-2 text-gray-600">{property.location}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
                    <div className="grid grid-cols-2 gap-4">
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
                        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">About this place</h2>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h3 className="text-xl font-bold mb-2">Amenities</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li>Wifi</li>
                            <li>Kitchen</li>
                            <li>Air conditioning</li>
                            <li>Free parking</li>
                        </ul>
                    </div>
                    <div className="border p-4 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Add dates for prices</h2>
                        <div className="border rounded-lg p-2 mb-4">
                            <div className="flex justify-between">
                                <div>
                                    <label className="block text-sm font-bold">CHECK-IN</label>
                                    <input type="date" className="w-full" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold">CHECKOUT</label>
                                    <input type="date" className="w-full" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm font-bold">GUESTS</label>
                                <input type="number" className="w-full" defaultValue="1" />
                            </div>
                        </div>
                        <button className="w-full bg-red-500 text-white p-4 rounded-lg font-bold">Check availability</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PropertyDetails;
