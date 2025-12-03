import { useQuery } from "@tanstack/react-query";
import APIclient from "@/Services/apiClinet";
import type  Game  from "../entities/Game";

const apiClinet = new APIclient<Game>('/games')

const useGame = (slug:string)=>useQuery({
    queryKey:['game',slug],
    queryFn:()=>apiClinet.getGame(slug)

})

export default useGame;