import {
  Badge,
  Stack,
  Box,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import GameAttrributes from "@/components/GameAttrributes";
import type Game from "@/entities/Game";

interface Props {
  game?: Game;
}

const GameAttr = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 2, xl: 2 }} marginBottom={10} marginTop={30}>
        <GridItem marginBottom={10}>
          {" "}
          <Box bg="" marginRight={40}>
            <GameAttrributes term="Platforms">
              {game?.platforms?.map(({ platform }) => (
                <Text key={platform.id}>{platform.name}</Text>
              ))}
            </GameAttrributes>
          </Box>
        </GridItem>
        <GridItem marginBottom={10}>
          {" "}
          <Box bg="" marginLeft="-200px">
            <GameAttrributes term="Genres">
              {game?.genres.map((genre) => (
                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </GameAttrributes>
          </Box>
        </GridItem>
        <GridItem marginBottom={10} >
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
        </GridItem>
        <GridItem marginBottom={10} marginLeft="-80px">
          <Box bg="">
            <GameAttrributes term="WebSite">
              <Text>{game?.website}</Text>
            </GameAttrributes>
          </Box>
        </GridItem>
      </SimpleGrid>

    </>
  );
};

export default GameAttr;
