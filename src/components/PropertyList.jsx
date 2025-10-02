
import React from 'react';
// import { properties } from '../assets/dummyData';
import PropertyCard from './PropertyCard';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

const PropertyList = () => {
    const {data} = useFetch('https://developer-look-server.vercel.app/api/properties')
    // console.log(data);
    if(!data) return <Loading/>
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 p-4">
            {data.map(property => (
                <PropertyCard key={property._id} property={property} />
            ))}
            
        </div>
    );
};

export default PropertyList;
