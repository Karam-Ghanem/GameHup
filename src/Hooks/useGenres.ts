
import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";

const apiClinet = new APIclient('/genres')


export interface Genre{
    id:number,
    name:string,
    image_background:string,
}


const useGenres = ()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClinet.get
})


export default useGenres;