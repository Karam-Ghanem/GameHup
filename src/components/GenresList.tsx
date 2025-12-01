import useGenres from "@/Hooks/useGenres";
import { Image, Link, Text } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";
import cropURL from "@/Services/imageURL";
import  useGameQueryStore from "@/Store/gameQueryStore";



const GenresList = () => {
  const { data: genres, error } = useGenres();
  const setSelectedGenreID = useGameQueryStore(s=>s.setSelectedGenreID)
  const gameQuery = useGameQueryStore(s=>s.gameQuery)

  const selectedGenre = genres?.filter(genre=>genre.id===gameQuery.selectedGenreID)
  

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
              fontWeight={selectedGenre?"bold" : "normal"}
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
