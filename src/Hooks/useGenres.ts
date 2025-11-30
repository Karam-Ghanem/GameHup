
import { useQuery } from "@tanstack/react-query";
// import apiClinet from "@/Services/apiClinet";
// import { type FetchResponse } from "@/Services/apiClinet"
import APIclient from "@/Services/apiClinet";

const apiClinet = new APIclient('/genres')


export interface Genre{
    id:number,
    name:string,
    image_background:string,
}


// const useGenres = ()=>useData<Genre>('/genres')
const useGenres = ()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClinet.get
})


export default useGenres;