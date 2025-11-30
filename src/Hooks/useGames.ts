
import { useQuery } from "@tanstack/react-query";
import { type GameQuery }  from "@/App";
import APIclient from "@/Services/apiClinet"
export interface Game {
    id: number;
    name: string;
    background_image:string,
    metacritic:number,
  }
  

  const apiClinet = new APIclient<Game>('/games')

const useGames = (gameQuery:GameQuery)=>useQuery<Game[],Error>({
  queryKey:['games',gameQuery],
  queryFn:()=>
  apiClinet
  .get({params: {
    genres:gameQuery?.selectedGenreID,
    parent_platforms:gameQuery?.selectedPlatformID,
    ordering:gameQuery?.selectedSortOrderVALUE,
    search:gameQuery?.searchWord}
  })
})


  
  export default useGames;

