import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {type GameQuery } from "@/App";

interface Props{
    gameQuery:GameQuery,
}

const DynamicHeading = ({gameQuery}:Props) => {

    

    const dynamicHeading = `${gameQuery.selectedGenre||""} ${gameQuery.selectedPlatform||""} Games`;
  return (
    <>
      <Box paddingBottom={10} paddingTop={5}>
        <Heading size="4xl">{dynamicHeading}</Heading>
      </Box>
    </>
  );
};

export default DynamicHeading;
