import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";



interface Platform{
    id:number,
    name:string
    slug:string,
    image_background:string,
}
interface PlatformParent{
    id:number,
    name:string,
    platforms:Platform[]
}


const apiClinet = new APIclient<PlatformParent>('/platforms/lists/parents')

const usePlatforms = ()=>useQuery({
    queryKey:['Platform'],
    queryFn:apiClinet.get
})


export default usePlatforms;