import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: `1fr`, lg: `250px 1fr` }}
      >
        <GridItem area="nav" bg="">
          {/* <Box h="20" /> */}
          <NavBar/>
        </GridItem>
        <GridItem area="aside" bg="blue">
          <Box h="20" />
        </GridItem>
        <GridItem area="main" bg="yellow">
          <Box h="20" />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
