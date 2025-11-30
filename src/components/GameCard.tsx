import { Card, Image } from "@chakra-ui/react";
import type { Game } from "@/Hooks/useGames";
import Metacritic from "./Metacritic";
import cropURL from "@/Services/imageURL";
interface Props{
  game:Game,
}

const GameCard = ({game}:Props) => {

  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          src={cropURL(game.background_image)}
          alt="error"
        />
        <Card.Body gap="1">
          <Card.Title fontSize={22}>{game.name}</Card.Title>
          <Card.Description>
            <Metacritic metacritic={game.metacritic}/>
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
