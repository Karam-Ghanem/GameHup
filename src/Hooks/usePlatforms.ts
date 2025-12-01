import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";
import ms from "ms";



interface Platform{
    id:number,
    name:string
    slug:string,
    image_background:string,
}
export interface PlatformParent{
    id:number,
    name:string,
    platforms:Platform[]
}


const apiClinet = new APIclient<PlatformParent>('/platforms/lists/parents')

const usePlatforms = ()=>useQuery({
    queryKey:['Platform'],
    queryFn:apiClinet.get,
    staleTime:ms('24h')
})


export default usePlatforms;