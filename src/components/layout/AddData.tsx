import { Button, Field, HStack, Input } from "@chakra-ui/react";

const AddData = () => {
  return (
    <HStack gap="5" w="full" p={5} shadow="xl" flexWrap="wrap" align="end">
      <Field.Root required>
        <Field.Label>
          X-Axis Label <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="e.g. january" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Y-Axis Value <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="e.g. 85" variant="outline" />
      </Field.Root>
      <Button type="submit" alignSelf="end" w="full">
        Submit
      </Button>
      <Button type="submit" alignSelf="end" colorPalette="red" w="full">
        Clear All
      </Button>
    </HStack>
  );
};

export default AddData;
