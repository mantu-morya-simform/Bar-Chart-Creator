import { Button, Field, HStack, Input } from "@chakra-ui/react";
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

    if (!label || !value) {
      alert("Please Provide Valid data To Add into Chart");
      return;
    }

    const exists = items.some((item) => item.label === label);
    if (exists) {
      alert("Duplicate label not allowed");
      return;
    }

    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), label: label, value: value },
    ]);

    if (labelRef.current) labelRef.current.value = "";
    if (valueRef.current) valueRef.current.value = "";
  }

  function handleClearClick() {
    setItems([]);
  }

  return (
    <HStack gap="5" w="full" p={5} shadow="xl" flexWrap="wrap" align="end">
      <Field.Root required>
        <Field.Label>
          X-Axis Label <Field.RequiredIndicator />
        </Field.Label>
        <Input
          type="text"
          placeholder="e.g. january"
          variant="subtle"
          ref={labelRef}
        />
      </Field.Root>
      <Field.Root required>
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

      <Button
        type="submit"
        alignSelf="end"
        w="full"
        onClick={handleSubmitClick}
      >
        Submit
      </Button>

      <Button
        type="submit"
        alignSelf="end"
        colorPalette="red"
        w="full"
        onClick={handleClearClick}
      >
        Clear All
      </Button>
    </HStack>
  );
};

export default AddData;
