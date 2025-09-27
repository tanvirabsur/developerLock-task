
import React from 'react';
import { properties } from '../assets/dummyData';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
    return (
        <div className="property-list">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
