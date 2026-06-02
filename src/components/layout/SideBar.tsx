import { Flex } from "@chakra-ui/react";
import AddData from "./AddData";
import AddedData from "./AddedData";
import type { ItemDataType } from "../../App";

const SideBar = ({ items }: { items: ItemDataType[] }) => {
  return (
    <Flex direction="column" gap={10}>
      <AddData />
      <AddedData items={items} />
    </Flex>
  );
};

export default SideBar;
