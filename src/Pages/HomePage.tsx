import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import DynamicHeading from "../components/DynamicHeading";
import GameGrid from "../components/GameGrid";
import GenresList from "../components/GenresList";
import OrderingSelector from "../components/OrderingSelector";
import PlatformSelector from "../components/PlatformSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: ` "main"`, lg: `"aside main"` }}
        templateColumns={{ base: `1fr`, lg: `250px 1fr` }}
      >
        <GridItem area="aside" bg="">
          <GenresList />
        </GridItem>
        <GridItem area="main" bg="">
          <DynamicHeading />
          <HStack>
            <PlatformSelector />
            <Box marginLeft="50px">
              <OrderingSelector />
            </Box>
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
