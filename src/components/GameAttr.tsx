import { Badge, HStack, Stack, Box, Text } from "@chakra-ui/react";
import GameAttrributes from "@/components/GameAttrributes";
import type Game  from "@/entities/Game";

interface Props {
  game?: Game;
}

const GameAttr = ({ game }: Props) => {
  return (
    <>
      <HStack marginBottom={10} marginTop={30}>
        <Box bg="" marginRight={40}>
          <GameAttrributes term="Platforms">
            {game?.platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </GameAttrributes>
        </Box>

        <Box bg="" marginTop="-98px">
          <GameAttrributes term="Genres">
            {game?.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </GameAttrributes>
        </Box>
      </HStack>

      <HStack>
        <Box bg="" marginRight={40}>
          <GameAttrributes term="Metascore">
            <Stack direction="row">
              <Badge
                colorPalette="green"
                padding={2}
                fontSize={15}
                fontWeight="bold"
              >
                {game?.metacritic}
              </Badge>
            </Stack>
          </GameAttrributes>
        </Box>

        <Box bg="">
          <GameAttrributes term="WebSite">
            <Text>{game?.website}</Text>
          </GameAttrributes>
        </Box>
      </HStack>
    </>
  );
};

export default GameAttr;
