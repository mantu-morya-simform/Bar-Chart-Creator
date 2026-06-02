import { Flex, Box } from "@chakra-ui/react";
import Main from "./components/layout/Main";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";

export type ItemDataType = {
  label: string;
  value: string;
};

const items: ItemDataType[] = [
  { label: "React", value: "80" },
  { label: "Node", value: "77" },
  { label: "Python", value: "55" },
  { label: "Java", value: "68" },
  { label: "C++", value: "49" },
];

function App() {
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
          <SideBar items={items} />
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
