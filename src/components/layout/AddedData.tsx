import { DataList, Text } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";

const AddedData = ({ items }: { items: ItemDataType[] }) => {
  return (
    <DataList.Root
      orientation="horizontal"
      maxW="md"
      p={10}
      shadow="xl"
      h="400px"
      overflowY="overlay"
    >
      <Text alignSelf="center" fontSize="lg" fontWeight="bold">
        Chart Data
      </Text>
      <DataList.Item key={"label"} py="4">
        <DataList.ItemLabel flex="2" fontSize="sm" fontWeight="bold">
          {"Label"}
        </DataList.ItemLabel>

        <DataList.ItemValue
          flex="1"
          textAlign="center"
          fontSize="sm"
          fontWeight="bold"
        >
          {"Value"}
        </DataList.ItemValue>
      </DataList.Item>
      {items.map((item) => (
        <DataList.Item key={item.id} py="4">
          <DataList.ItemLabel flex="2">{item.label}</DataList.ItemLabel>

          <DataList.ItemValue
            flex="1"
            textAlign="center"
            color="green"
            fontSize="sm"
            fontWeight="bold"
          >
            {item.value}
          </DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
};

export default AddedData;
