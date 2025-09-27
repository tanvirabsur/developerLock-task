
import React from 'react';
import { properties } from '../assets/dummyData';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
