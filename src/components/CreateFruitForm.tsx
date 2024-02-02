import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from "uuid";
import { Form } from "./Form";
import { IFruit } from "../interfaces/fruit-interface";
import { useAppStore } from "../states/app-store";

const createFruitFormSchema = z.object({
  name: z.string().min(3).toLowerCase().trim(),
  price: z.coerce
    .number()
    .min(0.01)
    .nonnegative()
    .transform((val) => {
      return parseFloat(val.toFixed(2));
    }),
});

type CreateFruitForm = z.infer<typeof createFruitFormSchema>;

export function CreateFruitFormComponent() {
  const addFruitState = useAppStore((state) => state.addFruit);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateFruitForm>({
    resolver: zodResolver(createFruitFormSchema),
  });

  const onSubmit = (data: CreateFruitForm) => {
    const id = uuid();
    const fruit = data as unknown as IFruit;
    fruit.id = id;
    console.log(fruit);
    addFruitState(fruit);
    reset();
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        label="Name"
        fieldError={errors.name}
        type="string"
        {...register("name")}
      />
      <Form.Input
        label="Price"
        fieldError={errors.price}
        type="number"
        min={0.01}
        step={0.01}
        {...register("price")}
      />
      <Form.Actions>
        <Form.Action type="submit">Create Fruit</Form.Action>
      </Form.Actions>
    </Form.Root>
  );
}
