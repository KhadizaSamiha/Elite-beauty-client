import { useQuery } from '@tanstack/react-query'

const useClassAll =() =>{
    const { isLoading, data: classesAll =[]} = useQuery(
        { queryKey: ['classesAll', ], 
        queryFn: async () =>{
            const res = await fetch(`https://ass12-server-one.vercel.app/classesAll`)
            return res.json();
        },
     })
     return [classesAll, isLoading]
}
export default useClassAll;