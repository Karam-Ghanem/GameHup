import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import OrderingSelector from "./components/OrderingSelector";
import { useState } from "react";
import DynamicHeading from "./components/DynamicHeading";

export interface GameQuery {
  selectedGenreID: number;
  selectedGenre: string;
  selectedPlatformID: number;
  selectedPlatform: string;
  selectedSortOrderVALUE: string;
  searchWord: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: `1fr`, lg: `250px 1fr` }}
      >
        <GridItem area="nav" bg="">
          <NavBar
            onWriteSarchText={(searchText) =>
              setGameQuery({ ...gameQuery, searchWord: searchText })
            }
          />
        </GridItem>
        <GridItem area="aside" bg="">
          <GenresList
            onSelectGenre={(genreID, genreName) =>
              setGameQuery({
                ...gameQuery,
                selectedGenreID: genreID,
                selectedGenre: genreName,
              })
            }
            gameQuery={gameQuery}
          />
        </GridItem>
        <GridItem area="main" bg="">
          <DynamicHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              onSelectPlatform={(platformID, platformName) =>
                setGameQuery({
                  ...gameQuery,
                  selectedPlatformID: platformID,
                  selectedPlatform: platformName,
                })
              }
            />
            <Box marginLeft="50px">
              <OrderingSelector
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({
                    ...gameQuery,
                    selectedSortOrderVALUE: sortOrder,
                  })
                }
              />
            </Box>
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
