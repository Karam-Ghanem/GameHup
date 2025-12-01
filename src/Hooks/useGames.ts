
import { useQuery } from "@tanstack/react-query";
import useGameQueryStore from "@/Store/gameQueryStore";
import APIclient from "@/Services/apiClinet"
import ms from "ms";
export interface Game {
    id: number;
    name: string;
    background_image:string,
    metacritic:number,
  }
  

  const apiClinet = new APIclient<Game>('/games')

const useGames = ()=>{

   const gameQuery = useGameQueryStore(s=>s.gameQuery)
  return useQuery<Game[],Error>({

    queryKey:['games',gameQuery],
    queryFn:()=>
    apiClinet
    .get({params: {
      genres:gameQuery?.selectedGenreID,
      parent_platforms:gameQuery?.selectedPlatformID,
      ordering:gameQuery?.selectedSortOrderVALUE,
      search:gameQuery?.searchWord}
    }),
    staleTime:ms('24h')
  })
}

  export default useGames;

