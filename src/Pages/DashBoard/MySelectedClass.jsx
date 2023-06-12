import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2';

const MySelectedClass = () => {
    const [selectedClass, setSelectedClass] = useState([]);
    useEffect(() => {
        fetch('https://ass12-server-one.vercel.app/paymentSelected')
            .then(res => res.json())
            .then(data => {
                setSelectedClass(data)
            })
            .catch(error => console.log(error))
    }, [])
    const handleDelete = classes =>{
        fetch(`https://ass12-server-one.vercel.app/paymentDelete/${classes._id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
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
                                <td><button onClick={() => handleDelete(classes)} className='bg-red-500 p-3 text-white rounded-lg'><FaTrashAlt/></button></td>
                                <td><Link to={{pathname: `/dashboard/payment/${classes._id}`, state:{ classes }}}><button className='btn btn-sm bg-purple-300'>Pay</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;