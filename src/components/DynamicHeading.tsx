import useGenres from "@/Hooks/useGenres";
import usePlatforms from "@/Hooks/usePlatforms";
import useGameQueryStore from "@/Store/gameQueryStore";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const DynamicHeading = () => {

  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.selectedGenreID);

  const selectedPlatformID = useGameQueryStore(
    (s) => s.gameQuery.selectedPlatformID
  );

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  console.log(genres?.filter((genre) => genre.id === selectedGenreID));
  const genre = genres?.filter((genre) => genre.id === selectedGenreID);
  const plat = platforms?.filter((plat) => plat.id === selectedPlatformID);

  const dynamicHeading = `${
    genre?.length === 0 ? "" : genre ? genre[0]?.name : ""
  } ${plat?.length === 0 ? "" : plat ? plat[0]?.name : ""} Games`;
  return (
    <>
      <Box paddingBottom={10} paddingTop={5}>
        <Heading size="4xl">{ dynamicHeading}</Heading>
      </Box>
    </>
  );
};

export default DynamicHeading;
