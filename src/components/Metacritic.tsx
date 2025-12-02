import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const Metacritic = ({ metacritic }: Props) => {
  const color = metacritic > 90 ? "green" : "purple";
  return (
    <>
      <Badge colorPalette={color}>{metacritic}</Badge>
    </>
  );
};

export default Metacritic;
