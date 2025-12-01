
import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";
import ms from "ms";


const apiClinet = new APIclient<Genre>('/genres')


export interface Genre{
    id:number,
    name:string,
    image_background:string,
}


const useGenres = ()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClinet.get,
    staleTime:ms('24h')
})


export default useGenres;