import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppStore } from "../states/app-store";
import { v4 as uuid } from "uuid";
import { IBucket } from "../interfaces/bucket-interface";
import { Form } from "./Form";

const createBucketFormSchema = z.object({
  maxCapacity: z.coerce.number().min(1).nonnegative(),
});

type CreateBucketForm = z.infer<typeof createBucketFormSchema>;

export function CreateBucketFormComponent() {
  const addBucketState = useAppStore((state) => state.addBucket);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBucketForm>({
    resolver: zodResolver(createBucketFormSchema),
  });

  const onSubmit = (data: CreateBucketForm) => {
    const id = uuid();
    const bucket = data as IBucket;
    bucket.id = id;
    addBucketState(bucket);
    reset();
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        label="Max Capacity"
        fieldError={errors.maxCapacity}
        type="number"
        min={1}
        {...register("maxCapacity")}
      />
      <Form.Actions>
        <Form.Action type="submit">Create Bucket</Form.Action>
      </Form.Actions>
    </Form.Root>
  );
}
