import { useQuery } from '@tanstack/react-query'

const useLoadUsers =() =>{
    const { isLoading, data: users =[]} = useQuery(
        { queryKey: ['users', ], 
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        },
     })
     return [users, isLoading]
}
export default useLoadUsers;