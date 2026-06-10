import { Flex, Box } from "@chakra-ui/react";
import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";
import { useState, useEffect } from "react";

export type ItemDataType = {
  id: string;
  label: string;
  value: number;
};

function App() {
  const STORAGE_KEY = "bar_chart_items_v1";

  const [items, setItems] = useState<ItemDataType[]>(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsedData: ItemDataType[] = JSON.parse(data);
      if (Array.isArray(parsedData)) return parsedData;
    }
  });

  // persist data into localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

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
