import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useLoadUsers = () => {
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: users = [] } = useQuery(
        {
            queryKey: ['users',],
            queryFn: async () => {
                const res = await axiosSecure('/users' )
                console.log('res from axios', res);
                return res.data;
            },
        })
    return [users, isLoading]
}
export default useLoadUsers;