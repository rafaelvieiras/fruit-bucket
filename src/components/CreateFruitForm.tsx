import { z } from "@/libs/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid } from "uuid";
import { Form } from "@/components/Form";
import { IFruit } from "@/interfaces/fruit-interface";
import { useAppStore } from "@/states/app-store";
import { useToast } from "@/hooks/toast/toast-hook";

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
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateFruitForm>({
    resolver: zodResolver(createFruitFormSchema),
  });

  const onSubmit = (data: CreateFruitForm) => {
    const id = uuid();
    const fruit = data as unknown as IFruit;
    fruit.id = id;
    addFruitState(fruit);
    addToast({
      id: Date.now().toString(),
      type: "success",
      message: "Fruta criada com sucesso",
    });
    reset();
  };

  return (
    <Form.Root
      className="card card-compact bg-base-100 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card-body">
        <div className="card-title">
          <h2 className="text-2xl font-bold">Criar Fruta</h2>
        </div>
        <Form.Input
          label="Nome"
          placeholder="Digite o nome da fruta. Ex: Banana"
          fieldError={errors.name}
          type="string"
          {...register("name")}
        />
        <Form.Input
          label="Preço"
          placeholder="Digite o preço da fruta. Ex: 1,99"
          fieldError={errors.price}
          autoComplete="off"
          type="number"
          min={0.01}
          step={0.01}
          {...register("price")}
        />
      </div>
      <Form.Actions className="card-actions">
        <Form.Action type="submit" disabled={!isValid}>
          Criar
        </Form.Action>
      </Form.Actions>
    </Form.Root>
  );
}
