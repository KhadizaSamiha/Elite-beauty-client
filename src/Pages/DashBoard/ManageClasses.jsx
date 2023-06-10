import React, { useEffect, useState } from 'react';
import usePendingClass from '../../hooks/usePendingClass';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [classesPending] = usePendingClass();
    console.log(classesPending);

    const handleMakeApprove = classes => {
        fetch(`http://localhost:5000/classesApprove/${classes._id}`, {
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
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
                            classesPending?.map((classes, index) => <tr key={classes._id}>
                                <td>{index + 1}</td>
                                <td><img className='h-12 w-12 rounded-full' src={classes.image} alt="" /></td>
                                <td>{classes.className}</td>
                                <td>{classes.teacherName}</td>
                                <td>{classes.email}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>
                                <td><button onClick={() => handleMakeApprove(classes)} className='btn btn-xs bg-rose-300'>Approve</button></td>
                                <td><button className='btn btn-xs bg-rose-300'>Deny</button></td>
                                <td><button className='btn btn-xs bg-rose-300'>Feedback</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;