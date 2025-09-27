
import React from 'react';
import { Link } from 'react-router';

const PropertyCard = ({ property }) => {
    return (
        <Link to={`/property/${property.id}`} className="block">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h3 className="font-bold text-lg">{property.location}</h3>
                    <p className="text-gray-600">{property.name}</p>
                    <p className="mt-2 font-semibold">${property.price} per night</p>
                    <div className="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1">{property.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
