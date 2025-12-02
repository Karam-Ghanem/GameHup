import useScreenshots from "@/Hooks/useScreenshots";
import { useParams } from "react-router-dom";
import Spiner from "./Spiner";
import { Image } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

const GameScreenshots = () => {
  const { slug } = useParams();
  const { data: screens, isLoading, error } = useScreenshots(slug!);

  if (error) throw error;

  if (isLoading) return <Spiner />;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        gap="10px"
        marginTop={50}
      >
        {screens?.map((screen) => (
          <Image
            _hover={{ transform: "translate(-20px,-20px)", transition: "0.8s" }}
            key={screen.id}
            src={screen.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
