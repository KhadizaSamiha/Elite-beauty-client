import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/instructor')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(error => console.log(error))
    }, [])
    console.log(instructors);
    return (
        <div className='pt-[100px] bg-purple-300'>
            <h1 className='text-center text-3xl text-purple-800 my-12'>All Instructors</h1>
            <div className='grid grid-cols-2 gap-6 ml-36'>
                {
                    instructors?.map(instructor => <div key={instructor?._id} className="card w-2/3 card-side bg-base-100 shadow-xl">
                        <figure><img className='h-32 w-32' src={instructor.image}  /></figure>
                        <div className="card-body">
                            <h5 className="card-title">{instructor?.name}</h5>
                            <p className='text-blue-600'> ClassTaken : {instructor.classesTaken}</p>
                            <p className='font-medium'>{instructor.email}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;