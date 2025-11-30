import usePlatforms from "@/Hooks/usePlatforms";
import { Box, Button, Link, Menu, Portal,Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


interface Props{
  onSelectPlatform:(platformID:number,platformName:string)=>void,
}
const PlatformSelector = ({onSelectPlatform}:Props) => {
  const { data: platforms, error } = usePlatforms();
  const [selectedPlatform,setSelectedPlatform] = useState("");

  if (error)
    return (
      <Text color="red" fontWeight="bold">
        {error}
      </Text>
    );
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?selectedPlatform:"Platforms"}
          <Box paddingTop={2}>
            <FaChevronDown />
          </Box>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms?.map((plat) => (
              <Menu.Item key={plat.id} value="new-txt" onClick={()=>setSelectedPlatform(plat.name)}>
                <Link onClick={()=>onSelectPlatform(plat.id,plat.name)} _hover={{ textDecoration:"none"}}>{plat.name}</Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
