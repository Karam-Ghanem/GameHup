import type { Screenshots } from "@/entities/Screenshots";
import APIclient from "@/Services/apiClinet";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameID:string)=>{
    const apiClinet = new APIclient<Screenshots>(`/games/${gameID}/screenshots`)
    return useQuery({
        queryKey:['Screenshots',gameID],
        queryFn:apiClinet.get,
    })
}

export default useScreenshots;