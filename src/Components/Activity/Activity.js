import React from 'react';

const Activity = ({ item, handleAddToCart }) => {
    const { title, img, time, description } = item;
    return (
        <div className='px-2 font-serif '>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-2 py-2">
                    <img src={img} alt="Shoes" className="rounded-xl h-40 w-full" />
                </figure>
                <div className="text-justify px-3">
                    <h2 className="text-center text-xl font-bold py-2">{title}</h2>
                    <p className='py-2'>Time : {time}</p>
                    <p>{description}</p>
                    <div className="card-actions py-4">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;