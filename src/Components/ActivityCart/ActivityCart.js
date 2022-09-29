import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../Utilitis/fakeDb';

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


            <div className="card w-40 lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <div className='flex '>
                        <img className='w-10 h-10 lg:w-14 lg:h-14 rounded-2xl' src="https://nieamulkabir.github.io/gym-react/image/Treadmill.jpg" alt="" />
                        <div className='ml-4'>
                            <h1 className='text-sm lg:text-xl font-bold'>Nieamul Kabir</h1>
                            <p className='text-sm lg:text-xl font-semibold'><i className="fa-solid fa-location-dot"></i>Mirpur Dhaka</p>
                        </div>
                    </div>


                    <div className=' lg:flex justify-evenly bg-slate-100 px-3 py-4 rounded-xl'>
                        <div className='py-2'>
                            <h1 className=''><span className='font-bold'>75</span> <span>Kg</span></h1>
                            <p>Weight</p>
                        </div>
                        <div className='py-2'>
                            <h1><span className='font-bold'>5.5</span> <span></span></h1>
                            <p>Height</p>
                        </div>
                        <div className='py-2'>
                            <h1><span className='font-bold'>25</span> <span>Kg</span></h1>
                            <p>Age</p>
                        </div>
                    </div>


                    <h2 className='text-start text-sm lg:text-xl font-bold'>Add A Break</h2>

                    <div className='lg:flex justify-evenly bg-slate-200 px-3 py-4 rounded-xl'>

                        <div>
                            <button onClick={() => {
                                setBreakTime(10)
                                addToDb()
                            }}><span>10</span>s
                            </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setBreakTime(20)
                                addToDb()
                            }}><span>20</span>s
                            </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setBreakTime(30)
                                addToDb()
                            }}><span>30</span>s
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setBreakTime(40)
                                addToDb()
                            }}><span>40</span>s
                            </button>
                        </div>
                    </div>

                    <h2 className='text-start text-sm lg:text-xl font-bold'>Exercise Details</h2>

                    <div>
                        <div className='lg:flex justify-evenly bg-slate-200 px-3 py-4 my-5 rounded-xl'>
                            <h1 className='text-sm lg:text-lg font-bold'>Exercise time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{totalTime}</span>s</p>
                        </div>
                        <div className='text-sm lg:flex justify-evenly bg-slate-200 px-3 py-4 rounded-xl'>
                            <h1 className='text-lg font-bold'>Break time</h1>
                            <p><span className='pr-2 text-lg font-bold'>{Number(breakTime)}</span>s</p>
                        </div>
                    </div>


                    <div className="card-actions justify-center mt-5 mx-10">
                        <button onClick={() => successHandle()} className="btn btn-primary text-xs lg:text-lg">Activity Completed</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ActivityCart;