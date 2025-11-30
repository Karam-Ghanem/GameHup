import useGenres from "@/Hooks/useGenres";
import { Image, Link, Text } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";
import cropURL from "@/Services/imageURL";
import type { GameQuery } from "@/App";

interface Props {
  onSelectGenre: (genreID: number,genre:string) => void;
  gameQuery:GameQuery,
}

const GenresList = ({ onSelectGenre,gameQuery}: Props) => {
  const { data: genres, error } = useGenres();
  

  if (error)
    return (
      <Text color="red" fontWeight="bold">
        {error.message}
      </Text>
    );

  return (
    <>
      <List.Root gap="2" variant="plain" align="center" padding={6}>
        {genres?.map((genre) => (
          <List.Item key={genre.id} paddingBottom={4}>
            <List.Indicator asChild color="green.500">
              <Image
                src={cropURL(genre.image_background)}
                width="50px"
                borderRadius={20}
              />
              
            </List.Indicator>
            <Link
              onClick={() => onSelectGenre(genre.id,genre.name)}
              _hover={{ textDecoration: "none" }}
              fontWeight={gameQuery.selectedGenreID===genre.id?"bold" : "normal"}
            >
              {genre.name}
            </Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenresList;
