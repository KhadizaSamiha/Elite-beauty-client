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
                        <div className="flex justify-end ">
                        <p className="card-title text-sky-600 text-lg">{singleClass?.className}</p>
                        <p className="card-title text-sky-600 text-lg">{singleClass?.teacherName}</p>
                        </div>
                        <h6 className="card-title text-gray-600">Class-Price : ${singleClass?.price}</h6>
                        {
                            singleClass.availableSeats == 0 ? <h6 className="card-title text-red-600">Seats : ${singleClass?.availableSeats}</h6>:
                            <h6 className="card-title text-gray-600">Seats : ${singleClass?.availableSeats}</h6>
                        }
                    </div>
                </div>)
            }
        </div>
    );
};

export default Classes;