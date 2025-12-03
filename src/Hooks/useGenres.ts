
import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";
import ms from "ms";
import  type Genre  from "../entities/Genre";

const apiClinet = new APIclient<Genre>('/genres')

const useGenres = ()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClinet.get,
    staleTime:ms('24h')
})


export default useGenres;