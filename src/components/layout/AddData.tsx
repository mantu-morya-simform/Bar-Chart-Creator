import { Button, Field, Flex, Input, Stack } from "@chakra-ui/react";
import type { ItemDataType } from "../../App";
import { useRef, type Dispatch, type SetStateAction } from "react";

type SideBarPropType = {
  items: ItemDataType[];
  setItems: Dispatch<SetStateAction<ItemDataType[]>>;
};

const AddData = ({ items, setItems }: SideBarPropType) => {
  const labelRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<HTMLInputElement | null>(null);

  function handleSubmitClick() {
    const label = labelRef.current?.value;
    const value = valueRef.current?.value;

    if (Number(value) < 1) {
      alert("Please Provide value grater then 1");
      return;
    }

    if (!label || !value) {
      alert("Please Provide Valid data To Add into Chart");
      return;
    }

    const exists = items.some((item) => item.label === label);
    if (exists) {
      alert("Duplicate label not allowed");
      return;
    }

    setItems((prev) => [...prev, { id: crypto.randomUUID(), label, value }]);

    if (labelRef.current) labelRef.current.value = "";
    if (valueRef.current) valueRef.current.value = "";
  }

  function handleClearClick() {
    setItems([]);
  }

  return (
    <Stack w="full" p={{ base: 3, md: 5 }} shadow="md" borderRadius="md">
      {/* Inputs */}
      <Stack direction={{ base: "column", md: "row" }}>
        <Field.Root flex="1" required>
          <Field.Label>
            X-Axis Label <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="text"
            placeholder="e.g. January"
            variant="outline"
            ref={labelRef}
          />
        </Field.Root>

        <Field.Root flex="1" required>
          <Field.Label>
            Y-Axis Value <Field.RequiredIndicator />
          </Field.Label>
          <Input
            type="number"
            placeholder="e.g. 85"
            variant="outline"
            ref={valueRef}
          />
        </Field.Root>
      </Stack>

      {/* Buttons */}
      <Flex justifyContent="space-between" gap={4}>
        <Button
          flex={1}
          w={{ md: "auto" }}
          onClick={handleSubmitClick}
          bg="blue.500"
        >
          Submit
        </Button>

        <Button
          flex={1}
          w={{ md: "auto" }}
          onClick={handleClearClick}
          bg="orange.500"
          variant="outline"
        >
          Clear All
        </Button>
      </Flex>
    </Stack>
  );
};

export default AddData;
