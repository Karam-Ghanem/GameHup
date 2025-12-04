import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExbandableText = ({ children }: Props) => {
  const [exbandable, setExbandable] = useState(false);

  const limit = 100;

  if (children.length < limit) return <Text>{children}</Text>;

  const text = !exbandable ? children.substring(0, limit) : children;

  return (
    <>
      <Text>
        {exbandable ? text : text + " ....."}
        <Button
          colorPalette="teal"
          size="sm"
          onClick={() => setExbandable(!exbandable)}
        >
          {exbandable ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExbandableText;
