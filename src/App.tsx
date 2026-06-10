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
    <Flex direction="column" h="100vh" overflow="hidden">
      <NavBar />
      <Flex
        flex="1"
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
      >
        {/* sidebar */}
        <Box
          w={{ base: "100%", md: "450px" }}
          borderRight={{ md: "1px solid" }}
          overflowY="auto"
          p={5}
        >
          <SideBar items={items} setItems={setItems} />
        </Box>

        {/* main content */}
        <Box flex="1" overflowY="auto" p={5}>
          <Main items={items} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default App;
