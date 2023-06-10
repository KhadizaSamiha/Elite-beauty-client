import { useQuery } from '@tanstack/react-query'

const usePendingClass =() =>{
    const { isLoading, data: classesPending =[]} = useQuery(
        { queryKey: ['classesPending', ], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/classesPending?status='pending'`)
            return res.json();
        },
     })
     return [classesPending, isLoading]
}
export default usePendingClass;