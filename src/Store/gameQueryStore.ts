import { create } from 'zustand'

export interface GameQuery {
    selectedGenreID?: number;
    selectedPlatformID?: number;
    searchWord?: string;
  }



interface  GameQueryStore{
    gameQuery:GameQuery,
    setSelectedGenreID:(genreID:number)=>void,
    setSelectedPlatformID:(platformID:number)=>void,
    setSortOrder:(sortOrder:string)=>void,
    setSearchText:(searchText:string)=>void,
}

const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    setSelectedGenreID:(selectedGenreID)=>set((store)=>({gameQuery:{...store.gameQuery,selectedGenreID}})),
    setSelectedPlatformID:(selectedPlatformID)=>set((store)=>({gameQuery:{...store.gameQuery,selectedPlatformID}})),
    setSortOrder:(selectedSortOrderVALUE)=>set((store)=>({gameQuery:{...store.gameQuery,selectedSortOrderVALUE}})),
    setSearchText:(searchWord)=>set(()=>({gameQuery:{searchWord}})),
}))


export default useGameQueryStore;