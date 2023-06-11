import React from 'react';
import useClass from '../../hooks/useClass';
import Card from '../../Components/Card';



const Classes = () => {
    const [classes] = useClass();
    console.log(classes);
    return (
        <div className='pt-28 grid grid-cols-3 px-16 bg-cyan-100 space-y-5 gap-4'>

            {
                classes?.map(singleClass => <div key={singleClass?._id} className="card h-full w-96 bg-base-100 shadow-xl">
                    <figure>
                        <div className='h-80'>
                            <img className='h-full' src={singleClass?.images} />
                        </div>
                    </figure>
                    <div className="card-body">
                        <p className="card-title text-pink-600 text-lg">{singleClass?.teacherName}</p>
                        <h3 className="card-title text-sky-600 text-xl">{singleClass?.className}</h3>
                        <p className="card-title text-gray-600">Class-Price : <span className='text-pink-600'>${singleClass?.price}</span></p>
                        <div className='flex justify-between'>
                            <div >
                                {
                                    singleClass.availableSeats == 0 ? <p className="card-title text-sm text-red-600">Seats : {singleClass?.availableSeats}</p> :
                                        <p className="card-title text-sm text-gray-600">Seats : <span className='text-sky-700'>{singleClass?.availableSeats}</span></p>
                                }
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline border-0 bg-pink-300'>Select</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Classes;