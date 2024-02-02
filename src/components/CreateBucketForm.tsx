import { z } from "@/libs/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppStore } from "@/states/app-store";
import { v4 as uuid } from "uuid";
import { IBucket } from "@/interfaces/bucket-interface";
import { Form } from "@/components/Form";
import { useToast } from "@/hooks/toast/toast-hook";

const createBucketFormSchema = z.object({
  maxCapacity: z.coerce.number().min(1).nonnegative(),
});

type CreateBucketForm = z.infer<typeof createBucketFormSchema>;

export function CreateBucketFormComponent() {
  const addBucketState = useAppStore((state) => state.addBucket);
  const bucketIndex = useAppStore((state) => state.bucketIndex);
  const increaseBucketIndex = useAppStore((state) => state.increaseBucketIndex);
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateBucketForm>({
    resolver: zodResolver(createBucketFormSchema),
  });

  const onSubmit = (data: CreateBucketForm) => {
    const id = uuid();
    const bucket = data as IBucket;
    bucket.id = id;
    bucket.index = bucketIndex ? bucketIndex + 1 : 1;
    bucket.name = `Balde #${bucket.index}`;
    bucket.fruits = [];
    addBucketState(bucket);
    increaseBucketIndex();

    addToast({
      id: Date.now().toString(),
      type: "success",
      message: "Balde criado com sucesso",
    });

    reset();
  };

  return (
    <Form.Root
      className="card card-compact bg-base-100 shadow-md text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card-body">
        <div className="card-title">
          <h2 className="text-2xl font-bold">Criar Balde</h2>
        </div>
        <Form.Input
          label="Capacidade Máxima do Balde"
          placeholder="Digite a capacidade máxima do balde em número de frutas"
          autoComplete="off"
          fieldError={errors.maxCapacity}
          type="number"
          min={1}
          {...register("maxCapacity")}
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
