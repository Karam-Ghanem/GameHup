import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import '../index.css'
const Layout = () => {
  return (
    <>
      <NavBar />
      <Box className="main">
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
