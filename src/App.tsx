import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import PlatformSelector from "./components/PlatformSelector";
import OrderingSelector from "./components/OrderingSelector";
import DynamicHeading from "./components/DynamicHeading";


function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: `1fr`, lg: `250px 1fr` }}
      >
        <GridItem area="nav" bg="">
          <NavBar/>
        </GridItem>
        <GridItem area="aside" bg="">
          <GenresList/>
        </GridItem>
        <GridItem area="main" bg="">
          <DynamicHeading />
          <HStack>
            <PlatformSelector/>
            <Box marginLeft="50px">
              <OrderingSelector/>
            </Box>
          </HStack>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
