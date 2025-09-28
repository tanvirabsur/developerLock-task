
import React, { useState } from 'react';
import { Link } from 'react-router';
import WishlistModal from './WishlistModal';

const PropertyCard = ({ property }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = [property.image, property.image, property.image]; // Dummy images for carousel

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const openModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    };

    const closeModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(false);
    };

    return (
        <>
            <Link to={`/property/${property.id}`} className="block">
                <div className="rounded-lg overflow-hidden relative rounded-full">
                    <img src={images[currentImage]} alt={property.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2">
                        <button onClick={openModal} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                        <button onClick={prevImage} className="bg-white rounded-full p-1 shadow-md">‹</button>
                    </div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                        <button onClick={nextImage} className="bg-white rounded-full p-1 shadow-md">›</button>
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-md">{property.location}</h3>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-sm">{property.rating}</span>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">{property.name}</p>
                    <p className="mt-1 font-semibold text-md">${property.price} <span className="font-normal">per night</span></p>
                </div>
            </Link>
            <WishlistModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default PropertyCard;
