import React, { useEffect, useState } from 'react';
import usePendingClass from '../../hooks/usePendingClass';
import Swal from 'sweetalert2';
import useClassAll from '../../hooks/useClassAll';

const ManageClasses = () => {

    const [classesAll] = useClassAll();
    console.log(classesAll);

    const handleMakeApprove = classes => {
        fetch(`https://ass12-server-one.vercel.app/classesApprove/${classes._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: `class has been approved`,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
            })
            .catch(error => console.log(error))
    }
    const handleMakeDeny = classes => {
        fetch(`https://ass12-server-one.vercel.app/classesDeny/${classes._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: `class has been denied`,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='w-full'>
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
                            classesAll?.map((classes, index) => <tr key={classes._id}>
                                <td>{index + 1}</td>
                                <td><img className='h-12 w-12 rounded-full' src={classes.image} alt="" /></td>
                                <td>{classes.className}</td>
                                <td>{classes.teacherName}</td>
                                <td>{classes.email}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>
                                <td>{classes.status == 'approved' ? <button className='btn btn-xs bg-gray-400 disabled'>approved</button> : <button onClick={() => handleMakeApprove(classes)} className='btn btn-xs bg-rose-300'>Approve</button>}</td>

                                <td>{classes.status == 'deny' ? <button className='btn btn-xs bg-gray-400 disabled'>Denied</button> : <button onClick={() => handleMakeDeny(classes)} className='btn btn-xs bg-rose-300'>Deny</button>}</td>

                               <td>{classes.status == 'deny' ? <button  className='btn btn-xs btn-warning btn-outline'>FeedBack</button>: <button className='btn btn-xs disabled'>Feedback</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;