import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityCart from '../ActivityCart/ActivityCart';

const GymActivities = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([])

    const handleAddToCart = (item) => {
        let newCart = [...cart, item];
        setCart(newCart);

    }

    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/gym-react/gym.json`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='w-11/12 my-14 mx-auto'>
            <div className='flex'>
                <div className='grid grid-cols-3 gap-5 '>

                    {
                        items.map(item => <Activity
                            key={item.id}
                            item={item}
                            handleAddToCart={handleAddToCart}
                        ></Activity>)
                    }
                </div>

                <div>
                    <ActivityCart
                        cart={cart}
                        key={cart.id}
                    ></ActivityCart>
                </div>
            </div>
        </div>
    );
};

export default GymActivities;