import ExbandableText from "@/components/ExbandableText";
import Spiner from "@/components/Spiner";
import useGame from "@/Hooks/useGame";
import {
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttr from "@/components/GameAttr";
import GameScreenshots from "@/components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spiner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} padding={10}>
        <Box>
          <Heading paddingBottom={4} size="4xl" marginLeft="-30px">
            {game?.name}
          </Heading>
            <ExbandableText>{game?.description_raw || ""}</ExbandableText>
          <GameAttr game={game} />
        </Box>

        <Box>
          <GameScreenshots />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
