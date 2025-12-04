import { Box, Heading, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}
const GameAttrributes = ({ term, children }: Props) => {
  return (
    <>
      <VStack>
        <Box>
          <Heading paddingBottom={4} size="4xl" color="gray.600" marginRight="-20px">
            {term}
          </Heading>
          {children}
        </Box>
      </VStack>
    </>
  );
};

export default GameAttrributes;
