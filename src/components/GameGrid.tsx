import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import SkeletonGame from "./SkeletonGame";




const GameGrid = () => {


  const { data: games, error, isLoading } = useGames();
  
  const ske = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (error)
    return (
      <Text color="red" fontWeight="bold">
        {error.message}
      </Text>
    );



  return (
    <>
      <SimpleGrid
        gap={3}
        paddingTop={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        {isLoading
          ? ske.map((ske) => (
              <Box key={ske}>
                <SkeletonGame />
              </Box>
            ))
          : games?.map((game) => (
              <Box key={game.id}>
                <GameCard game={game} />
              </Box>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
