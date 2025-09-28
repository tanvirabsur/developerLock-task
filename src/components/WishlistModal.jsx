import React from 'react';

const WishlistModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Create wishlist</h2>
                    <button onClick={onClose} className="text-2xl">&times;</button>
                </div>
                <div>
                    <input type="text" placeholder="Name" className="w-full border p-2 rounded-lg mb-4" />
                    <button className="w-full bg-black text-white p-2 rounded-lg font-bold">Create</button>
                </div>
            </div>
        </div>
    );
};

export default WishlistModal;