import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";

import Theme from "@/Theme";
import SearchInput from "./SearchInput";



const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding={1}>
        <Image rounded="md" src={logo} alt="logo error" width={20} />
        <SearchInput />
        <Theme />
      </HStack>
    </>
  );
};

export default NavBar;
