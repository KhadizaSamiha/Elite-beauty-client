import { useQuery } from '@tanstack/react-query'

const usePendingClass =() =>{
    const { isLoading, data: classesPending =[]} = useQuery(
        { queryKey: ['classesPending', ], 
        queryFn: async () =>{
            const res = await fetch(`https://ass12-server-one.vercel.app/classesPending?status='pending'`)
            return res.json();
        },
     })
     return [classesPending, isLoading]
}
export default usePendingClass;