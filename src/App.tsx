import { Flex, Box } from "@chakra-ui/react";
import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import { useState } from "react";

export type ItemDataType = {
  id: string;
  label: string;
  value: string;
};

function App() {
  const [items, setItems] = useState<ItemDataType[]>([]);

  return (
    <Flex direction="column" h="100dvh" overflow="hidden">
      {/* Fixed Navbar */}
      <Box flexShrink={0}>
        <NavBar />
      </Box>

      {/* Body */}
      <Flex
        flex="1"
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
      >
        {/* Sidebar - Scrollable */}
        <Box
          w={{ base: "100%", md: "280px", lg: "320px" }}
          borderRight={{ md: "1px solid" }}
          borderBottom={{ base: "1px solid", md: "none" }}
          p={{ base: 3, md: 4, lg: 5 }}
          overflowY="auto"
          flexShrink={0}
        >
          <SideBar items={items} setItems={setItems} />
        </Box>

        {/* Main Chart Area - Fixed */}
        <Box
          flex="1"
          p={{ base: 3, md: 4, lg: 6 }}
          overflow="hidden"
          display="flex"
        >
          <Main items={items} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
