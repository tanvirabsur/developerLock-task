import { Heart, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const PropertyCard = ({ property }) => {
  console.log(property);
  return (
    <Link to={`/property/${property.id}`} className="block ">
      <div className='relative'>
        <Heart className='absolute right-5 top-1.5 text-white ' />
        <img
          src={property.image}
          alt="Shoes"
          className="rounded-3xl h-48 w-full" />
        <p className='text-xs font-bold mt-1.5 ml-3'>{property.cardName}</p>
        <p className='text-xs flex items-center ml-3 text-gray-500'>{property.cardPrice} . <Star size={12} /> {property.rating}</p>

      </div>
    </Link>
  );
};

export default PropertyCard;