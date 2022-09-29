import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityCart = (props) => {
    const { cart } = props

    const [breakTime, setBreakTime] = useState('')

    const successHandle = () => {
        toast('successful');
    }

    let totalTime = 0;
    for (const item of cart) {
        totalTime = Number(totalTime + item.time);
    }
    return (
        <div className='mx-auto'>
            <h1>Cart length : {props.cart.length}</h1>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">


                    <div className='flex '>
                        <img className='w-14 rounded-2xl' src="https://nieamulkabir.github.io/gym-react/image/Treadmill.jpg" alt="" />
                        <div className='ml-4'>
                            <h1 className='text-xl font-bold'>Nieamul Kabir</h1>
                            <p className='text-lg font-semibold'><i class="fa-solid fa-location-dot"></i>Mirpur Dhaka</p>
                        </div>
                    </div>


                    <div className='flex justify-evenly bg-slate-100 px-3 py-4 rounded-xl'>
                        <div>
                            <h1><span className='font-bold'>75</span> <span>Kg</span></h1>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h1><span className='font-bold'>5.5</span> <span></span></h1>
                            <p>Height</p>
                        </div>
                        <div>
                            <h1><span className='font-bold'>25</span> <span>Kg</span></h1>
                            <p>Age</p>
                        </div>
                    </div>


                    <h2 className="card-title">Add A Break</h2>

                    <div className='flex justify-evenly bg-slate-200 px-3 py-4 rounded-xl'>

                        <div>
                            <button onClick={() => {
                                setBreakTime(10)
                            }}><span>10</span>s
                            </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setBreakTime(20)
                            }}><span>20</span>s
                            </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setBreakTime(30)
                            }}><span>30</span>s
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setBreakTime(40)

                            }}><span>40</span>s
                            </button>
                        </div>
                    </div>

                    <h2 className="card-title">Exercise Details</h2>

                    <div>
                        <div className='flex justify-evenly bg-slate-200 px-3 py-4 my-5 rounded-xl'>
                            <h1 className='text-lg font-bold'>Exercise time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{totalTime}</span>seconds</p>
                        </div>
                        <div className='flex justify-evenly bg-slate-200 px-3 py-4 rounded-xl'>
                            <h1 className='text-lg font-bold'>Break time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{breakTime}</span>seconds</p>
                        </div>
                    </div>


                    <div className="card-actions justify-center mt-5">
                        <button onClick={() => successHandle()} className="btn btn-primary">Activity Completed</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ActivityCart;