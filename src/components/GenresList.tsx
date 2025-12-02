import useGenres from "@/Hooks/useGenres";
import { Image, Link, Text } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";
import cropURL from "@/Services/imageURL";
import useGameQueryStore from "@/Store/gameQueryStore";

const GenresList = () => {
  const { data: genres, error } = useGenres();
  const setSelectedGenreID = useGameQueryStore((s) => s.setSelectedGenreID);
  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.selectedGenreID);


  const genre = genres?.filter((genre) => genre.id === selectedGenreID);
  const selectedGenre = genre?.length === 0 ? "" : genre ? genre[0]?.name : "";


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
              onClick={() => setSelectedGenreID(genre.id)}
              _hover={{ textDecoration: "none" }}
              fontWeight={selectedGenre===genre.name ? "bold" : "normal"}
              color={selectedGenre===genre.name ? "teal" : ""}
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
