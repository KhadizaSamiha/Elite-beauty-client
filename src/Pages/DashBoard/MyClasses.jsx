import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/classes/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyClasses(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2 className='text-center text-5xl text-pink-700 mb-10 font-medium'>My Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                        <th></th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses?.map((my, index) => <tr key={my._id}>
                               <td>{index + 1}</td>
                                <td><img className='h-12 w-12 rounded-full' src={my.image} alt="" /></td>
                                <td>{my.className}</td>
                                <td>{my.teacherName}</td>
                                <td>{my.email}</td>
                                <td>{my.availableSeats}</td>
                                <td>{my.price}</td>
                                <td><button className='btn btn-outline btn-sm mt-5'>{my.status}</button></td>
                                <td>{my.enrolledStudents}</td>
                                <td></td>
                                <td><button className='btn btn-sm bg-rose-300'>Update</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;