
import useData from "./useData";
import { type GameQuery }  from "@/App";

export interface Game {
    id: number;
    name: string;
    background_image:string,
    metacritic:number,
  }
  


const useGames = (gameQuery:GameQuery)=>
useData<Game>('/games',
  {params:
    {
      genres:gameQuery?.selectedGenreID,
      parent_platforms:gameQuery?.selectedPlatformID,
      ordering:gameQuery?.selectedSortOrderVALUE,
      search:gameQuery?.searchWord
    }},
    [
      gameQuery
    ])

export default useGames;