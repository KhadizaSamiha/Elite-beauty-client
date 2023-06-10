import { useQuery } from '@tanstack/react-query'

const useClassAll =() =>{
    const { isLoading, data: classesAll =[]} = useQuery(
        { queryKey: ['classesAll', ], 
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/classesAll`)
            return res.json();
        },
     })
     return [classesAll, isLoading]
}
export default useClassAll;