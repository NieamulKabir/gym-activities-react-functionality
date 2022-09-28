import React from 'react';

const Activity = ({ item }) => {
    const { title, img, time, description } = item;
    return (
        <div className='px-2'>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="text-justify px-2">
                    <h2 className="card-title py-2">{title}</h2>
                    <p className='py-2'>Time : {time}</p>
                    <p>{description}</p>
                    <div className="card-actions py-4">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;