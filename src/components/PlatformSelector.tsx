import useGames from "@/Hooks/useGames";
import usePlatforms from "@/Hooks/usePlatforms";
import useGameQueryStore from "@/Store/gameQueryStore";
import { Box, Button, Link, Menu, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PlatformSelector = () => {
  const setSelectedPlatformID = useGameQueryStore(
    (s) => s.setSelectedPlatformID
  );

  const { data: platforms, error } = usePlatforms();

  const [selectedPlatform, setSelectedPlatform] = useState("");

  if (error)
    return (
      <Text color="red" fontWeight="bold">
        {error.message}
      </Text>
    );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform : "Platforms"}
          <Box paddingTop={2}>
            <FaChevronDown />
          </Box>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.map((plat) => (
              <Menu.Item
                key={plat.id}
                value="new-txt"
                onClick={() => setSelectedPlatform(plat.name)}
              >
                <Link
                  onClick={() => setSelectedPlatformID(plat.id)}
                  _hover={{ textDecoration: "none" }}
                >
                  {plat.name}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
