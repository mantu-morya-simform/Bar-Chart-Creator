import { Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";
import { useMemo } from "react";
import { colors } from "../../data/colorsData";

const Main = ({ items }: { items: ItemDataType[] }) => {
  // Single source of truth for bar height — changes per breakpoint
  const maxBarHeight =
    useBreakpointValue({ base: 180, sm: 250, md: 500 }) ?? 500;

  const maxValue = useMemo(() => {
    return Math.max(...items.map((item) => Number(item.value)));
  }, [items]);

  const sliceValue = maxValue / 10;
  // const sliceValue = Number((maxValue / 10).toFixed(2));
  const arr = Array.from({ length: 11 }, (_, i) =>
    Number((i * sliceValue).toFixed(1)),
  );
  return (
    <Box
      w="100%"
      h="100%"
      p={["4", "6", "10"]}
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      shadow="lg"
    >
      <Text
        fontSize={["lg", "2xl", "3xl"]}
        fontWeight="bold"
        mb={["4", "6", "10"]}
        textAlign="center"
        color="black"
      >
        Bar Chart
      </Text>

      <Flex
        flex="1"
        align="end"
        justify="space-evenly"
        gap={["2", "4", "6"]}
        borderBottom="2px solid"
        borderLeft="2px solid"
        borderColor="gray.700"
        pb={["3", "4", "5"]}
        pl={["3", "4", "5"]}
        position="relative"
      >
        <VStack
          flex="1"
          justify="end"
          maxW="120px"
          gap="3"
          position="absolute"
          left={["4", "4", "5"]}
        >
          {arr.map((currentValue, i) => (
            <Text
              key={i}
              fontSize="sm"
              fontWeight="bold"
              color="black"
              position="absolute"
              bottom={`${(currentValue / maxValue) * maxBarHeight}px`}
            >
              {items.length && currentValue}
            </Text>
          ))}
        </VStack>

        {items.map((item, index) => (
          <VStack
            key={item.label}
            flex="1"
            justify="end"
            maxW={["50px", "80px", "120px"]}
            gap={["1", "2", "3"]}
            ml="25px"
          >
            {/* Value label — hidden on mobile */}
            <Text
              fontSize={["xs", "sm"]}
              fontWeight="bold"
              color="black"
              display={["none", "block"]}
            >
              {item.value}
            </Text>

            <Box
              w="100%"
              h={`${(Number(item.value) / maxValue) * maxBarHeight}px`}
              bg={colors[index % colors.length].split(".")[0]}
              borderRadius="md md 0 0"
              transition="height 0.3s"
              _hover={{
                bg: colors[index % colors.length].split(".")[0].concat(".700"),
              }}
              cursor="pointer"
              title={`${item.label}: ${item.value}`}
            />

            <Text
              fontSize={["xs", "sm"]}
              fontWeight="bold"
              color="black"
              textAlign="center"
            >
              {item.label}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Main;
