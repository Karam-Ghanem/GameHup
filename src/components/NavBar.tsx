import logo from "@/assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";

import Theme from "@/Theme";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding={1}>
        <Link to="/">
          <Image rounded="md" src={logo} alt="logo error" width={20} />
        </Link>
        <SearchInput />
        <Theme />
      </HStack>
    </>
  );
};

export default NavBar;
