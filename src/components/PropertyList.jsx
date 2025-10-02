
import React from 'react';
// import { properties } from '../assets/dummyData';
import PropertyCard from './PropertyCard';
import useFetch from '../hooks/useFetch';

const PropertyList = () => {
    const {data} = useFetch('/dummyProperty.json')
    // console.log(data);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4">
            {data.map(property => (
                <PropertyCard key={property._id} property={property} />
            ))}
            
        </div>
    );
};

export default PropertyList;
