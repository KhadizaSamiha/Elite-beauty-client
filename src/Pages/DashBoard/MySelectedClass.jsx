import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [selectedClass, setSelectedClass] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/paymentSelected')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSelectedClass(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-purple-700'>My Selected Class</h2>
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
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass?.map((classes, index) => <tr key={classes._id}>
                                <td>{index + 1}</td>
                                <td><img className='h-12 w-12 rounded-full' src={classes.image} alt="" /></td>
                                <td>{classes.className}</td>
                                <td>{classes.teacherName}</td>
                                <td>{classes.email}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>
                               <td><Link to={`/dashboard/payment/${classes._id}`}><button className='btn btn-sm bg-purple-300'>Pay</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;