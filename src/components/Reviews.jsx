import React from 'react';

const Reviews = ({ reviews }) => {
    
    return (
        <div className='grid lg:grid-cols-2 gap-6 mt-6'>
            {
                reviews.map((review,index) => (
                    <div key={index}>
                        <div className="w-12">
                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" className='rounded-2xl'/>
                        </div>
                        <p className='font-bold'>{review.user}</p>
                        <p className='text-sm text-gray-600'>{review.date}</p>
                        <p className='mt-2'>{review.comment}</p>
                        <hr className='my-4' />
                    </div>
                ))
            }
        </div>
    );
};

export default Reviews;