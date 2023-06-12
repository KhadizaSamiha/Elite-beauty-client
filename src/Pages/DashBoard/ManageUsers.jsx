import { useQuery } from '@tanstack/react-query';
import useLoadUsers from '../../hooks/useLoadUsers';
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const [users] = useLoadUsers();
    console.log(users);
    
    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: `${user.name} is an admin now!`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            }
        })

    }
    const handleMakeInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method:"PATCH"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: `${user.name} is an instructor now!`,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            }
        })

    }
    return (
        <div className='w-full pl-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>instructor</th>
                            <th>admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'instructor' ? <button className='btn bg-gray-300 disabled'>Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className='btn bg-rose-300'>Make Instructor</button>}</td>
                                <td>{user.role == 'admin' ? <button className='btn bg-gray-300 disabled'>Admin</button> : <button onClick={() => handleMakeAdmin(user)} className='btn bg-rose-300'>Make Admin</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;