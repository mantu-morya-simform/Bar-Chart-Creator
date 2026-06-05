import { Box, DataList, Text } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";

const AddedData = ({ items }: { items: ItemDataType[] }) => {
  return (
    <Box
      w="full"
      h="full"
      p={{ base: 3, md: 4 }}
      shadow="md"
      borderRadius="md"
      overflow="hidden"
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
        overflowY="auto"
      >
        {/* Header */}
        <DataList.Item py={2}>
          <DataList.ItemLabel flex="2" fontSize="sm" fontWeight="bold">
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
        </DataList.Item>

        {/* Items */}
        {items.map((item) => (
          <DataList.Item key={item.id} py={2}>
            <DataList.ItemLabel flex="2" fontSize="sm">
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
          </DataList.Item>
        ))}
      </DataList.Root>
    </Box>
  );
};

export default AddedData;
