import { useQuery } from '@tanstack/react-query';
import useLoadUsers from '../../hooks/useLoadUsers';


const ManageUsers = () => {
    const [users] = useLoadUsers();
    console.log(users);
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
                                <td><button className='btn bg-rose-300 '>Make Instructor</button></td>
                                <td><button className='btn bg-rose-300'>Make Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;