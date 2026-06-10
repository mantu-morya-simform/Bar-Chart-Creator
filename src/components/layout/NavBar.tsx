import { Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 3, md: 4 }}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="10"
      bg="white"
    >
      {/* Logo / Title */}
      <HStack>
        <Icon as={FaChartBar} boxSize={{ base: 5, md: 6 }} />
        <Heading size={{ base: "md", md: "lg", lg: "xl" }}>Bar Chart</Heading>
      </HStack>
      <Flex />
    </Flex>
  );
};

export default Navbar;
