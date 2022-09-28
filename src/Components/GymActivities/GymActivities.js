import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import ActivityCart from '../ActivityCart/ActivityCart';

const GymActivities = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://nieamulkabir.github.io/gym-react/gym.json`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex'>
                <div className='grid grid-cols-3 gap-7'>

                    {
                        items.map(item => <Activity
                            key={item.id}
                            item={item}
                        ></Activity>)
                    }
                </div>

                <div>
                    <ActivityCart></ActivityCart>
                </div>
            </div>
        </div>
    );
};

export default GymActivities;