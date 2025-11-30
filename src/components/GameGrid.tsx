import useGames from "@/Hooks/useGames";
import GameCard from "./GameCard";
import { Box, Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import SkeletonGame from "./SkeletonGame";
import { type GameQuery } from "@/App";



interface Props{
  gameQuery:GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  
  const ske = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  if (error)
    return (
      <Text color="red" fontWeight="bold">
        {error}
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
