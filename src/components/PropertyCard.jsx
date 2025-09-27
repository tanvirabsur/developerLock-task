
import React from 'react';
import { Link } from 'react-router';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <Link to={`/property/${property.id}`}>
                <img src={property.image} alt={property.name} />
                <h3>{property.name}</h3>
                <p>{property.location}</p>
                <p>${property.price} per night</p>
                <p>Rating: {property.rating}</p>
            </Link>
        </div>
    );
};

export default PropertyCard;
