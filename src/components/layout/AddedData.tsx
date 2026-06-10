import { Box, DataList, Text, Button } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";
import type { Dispatch, SetStateAction } from "react";

const AddedData = ({
  items,
  setItems,
}: {
  items: ItemDataType[];
  setItems: Dispatch<SetStateAction<ItemDataType[]>>;
}) => {
  function handleEdit(item: ItemDataType) {
    const newLabel = prompt("Edit label:", item.label);
    if (newLabel === null) return; // user cancelled

    const newValue = prompt("Edit value:", String(item.value));
    if (newValue === null) return;

    if (!newLabel || !newValue) {
      alert("Please provide valid label and value.");
      return;
    }

    if (Number(newValue) < 1) {
      alert("Please provide a value greater than 0.");
      return;
    }

    const duplicate = items.some(
      (it) => it.label === newLabel && it.id !== item.id,
    );

    if (duplicate) {
      alert("Duplicate label not allowed");
      return;
    }

    setItems((prev) =>
      prev.map((PrevItem) =>
        PrevItem.id === item.id
          ? { ...PrevItem, label: newLabel, value: Number(newValue) }
          : PrevItem,
      ),
    );
  }

  return (
    <Box
      w="full"
      h="full"
      p={{ base: 12, md: 4 }}
      shadow="md"
      borderRadius="md"
      overflow="auto"
    >
      {/* Title */}
      <Text
        textAlign="center"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="bold"
        mb={4}
      >
        Chart Data
      </Text>

      {/* Data List */}
      <DataList.Root
        orientation="horizontal"
        w="full"
        maxH={{ base: "200px", md: "300px", lg: "400px" }}
        // overflowY="auto"
      >
        {/* Header */}
        <DataList.Item py={2}>
          <DataList.ItemLabel flex="1" fontSize="sm" fontWeight="bold">
            Label
          </DataList.ItemLabel>

          <DataList.ItemValue
            flex="1"
            textAlign="center"
            fontSize="sm"
            fontWeight="bold"
          >
            Value
          </DataList.ItemValue>

          <DataList.ItemValue
            flex="1"
            textAlign="center"
            fontSize="sm"
            fontWeight="bold"
          >
            Action
          </DataList.ItemValue>
        </DataList.Item>

        {/* Items */}
        {items.map((item) => (
          <DataList.Item
            key={item.id}
            py={2}
            borderBottom="1px solid gray"
            pb={5}
          >
            <DataList.ItemLabel flex="1" fontSize="sm">
              {item.label}
            </DataList.ItemLabel>

            <DataList.ItemValue
              flex="1"
              textAlign="center"
              color="green.500"
              fontSize="sm"
              fontWeight="bold"
            >
              {item.value}
            </DataList.ItemValue>

            <DataList.ItemValue flex="1" textAlign="right">
              <Button size="sm" onClick={() => handleEdit(item)}>
                Edit
              </Button>
            </DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList.Root>
    </Box>
  );
};

export default AddedData;
