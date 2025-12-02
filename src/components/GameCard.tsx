import { Card, Image } from "@chakra-ui/react";
import type Game  from "@/entities/Game";
import Metacritic from "./Metacritic";
import cropURL from "@/Services/imageURL";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root
        maxW="sm"
        overflow="hidden"
        _hover={{
          transition: "0.7s",
          transform: "translate(-20px,-20px)",
        }}
      >
        <Image src={cropURL(game.background_image)} alt="error" />
        <Card.Body gap="1">
          <Card.Title fontSize={22}>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Card.Title>
          <Card.Description>
            <Metacritic metacritic={game.metacritic} />
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
