import { Card, SkeletonText } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react";
const SkeletonGame = () => {
  return (
    <>
      <Card.Root maxW="sm" overflow="hidden">
        <Skeleton height="200px"/>
        <Card.Body gap="1">
            <SkeletonText/>          
        </Card.Body>
      </Card.Root>
    </>
  )
}

export default SkeletonGame;
