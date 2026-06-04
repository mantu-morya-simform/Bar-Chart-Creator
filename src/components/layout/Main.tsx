import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";
import { useMemo } from "react";

const Main = ({ items }: { items: ItemDataType[] }) => {
  const maxValue = useMemo(() => {
    return Math.max(...items.map((item) => Number(item.value)));
  }, [items]);

  const sliceValue = maxValue / 10;

  const arr: number[] = [];

  for (let i = 0; i <= 10; i++) {
    arr[i] = sliceValue * i;
  }

  return (
    <Box
      w="100%"
      h="100%"
      p="10"
      // bg="gray.100"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      shadow="lg"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb="10"
        textAlign="center"
        color="black"
      >
        Bar Chart
      </Text>

      <Flex
        flex="1"
        align="end"
        justify="space-evenly"
        gap="6"
        borderBottom="2px solid"
        borderLeft="2px solid"
        borderColor="gray.700"
        pb="5"
        pl={5}
        position="relative"
      >
        <VStack
          flex="1"
          justify="end"
          maxW="120px"
          gap="3"
          position="absolute"
          left="5"
        >
          {arr.map((currentValue) => (
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="black"
              position="absolute"
              bottom={`${(currentValue / maxValue) * 500}px`}
            >
              {items.length && currentValue}
            </Text>
          ))}
        </VStack>

        {items.map((item) => (
          <VStack key={item.label} flex="1" justify="end" maxW="120px" gap="3">
            <Text fontSize="sm" fontWeight="bold" color="black">
              {item.value}%
            </Text>

            <Box
              w="100%"
              h={`${(Number(item.value) / maxValue) * 500}px`}
              bg="blue.600"
              borderRadius="md md 0 0"
              transition="0.3s"
              _hover={{
                bg: "orange.400",
              }}
              cursor="pointer"
            />

            <Text fontSize="sm" fontWeight="bold" color="black">
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Main;
