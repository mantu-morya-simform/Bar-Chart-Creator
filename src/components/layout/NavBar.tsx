import { Flex, Heading } from "@chakra-ui/react";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex as="nav" justify="start" align="center" px="8" py="4" boxShadow="sm">
      <Heading size="xl" display="flex" alignItems="center" gap={2}>
        Bar Chart
        <FaChartBar />
      </Heading>
    </Flex>
  );
};

export default Navbar;
