import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";
import ms from "ms";
import type PlatformParent  from "../entities/PlatformParent";

const apiClinet = new APIclient<PlatformParent>('/platforms/lists/parents')

const usePlatforms = ()=>useQuery({
    queryKey:['Platform'],
    queryFn:apiClinet.get,
    staleTime:ms('24h')
})


export default usePlatforms;