import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
const PopularInstructors = () => {
    const [PopularIns, setPopularIns] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classesAll')
            .then(res => res.json())
            .then(data => {
                setPopularIns(data)

            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div >
            <h3 className='text-5xl text-purple-600 text-center m-12 bg-purple-200 h-16 rounded-2xl'>Our Popular Instructors</h3>
            <Marquee>
                <div className='flex'>
                    {
                        PopularIns.slice(0, 6).map(ins => <div key={ins._id} className="card w-72 gap-4 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img className='h-24 w-24 rounded-lg' src={ins?.teacherImage}  />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title ">{ins?.teacherName}</h2>
                          <p className='text-purple-600'>{ins.email}</p>
                        </div>
                      </div>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default PopularInstructors;