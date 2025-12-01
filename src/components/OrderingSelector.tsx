import { Box, Button, Link, Menu, Portal } from "@chakra-ui/react";
import orederingList from "@/Data/orderingList";

import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import useGameQueryStore from "@/Store/gameQueryStore";



const OrderingSelector = () => {

  const setSortOrder = useGameQueryStore(s=>s.setSortOrder)


  const [sortOrder, setSortOrderr] = useState("");


  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {sortOrder != "" ? sortOrder : "Relevance"}
            <Box paddingTop={2}>
              <FaChevronDown />
            </Box>
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {orederingList.map((item) => (
                <Menu.Item
                  onClick={() => setSortOrderr(item.label)}
                  key={item.value}
                  value="new-txt"
                >
                  <Link  onClick={()=>setSortOrder(item.value)} _hover={{ textDecoration: "none" }}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default OrderingSelector;
