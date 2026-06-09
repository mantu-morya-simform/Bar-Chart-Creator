import { Flex } from "@chakra-ui/react";
import AddData from "./AddData";
import AddedData from "./AddedData";
import type { ItemDataType } from "../../App";
import type { Dispatch, SetStateAction } from "react";

type SideBarPropType = {
  items: ItemDataType[];
  setItems: Dispatch<SetStateAction<ItemDataType[]>>;
};

const SideBar = ({ items, setItems }: SideBarPropType) => {
  return (
    <Flex
      direction="column"
      gap={{ base: 4, md: 6, lg: 8 }}
      h="full"
      overflowY="auto"
    >
      <AddData items={items} setItems={setItems} />
      <AddedData items={items} setItems={setItems} />
    </Flex>
  );
};

export default SideBar;
