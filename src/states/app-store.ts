import { IApplicationState } from "../interfaces/application-state-interface";
import { create } from "zustand";
import { IBucket } from "../interfaces/bucket-interface";
import { removeBucketOrDie } from "../utils/remove-bucket-or-die";
import { addFruitToBucketOrDie } from "../utils/add-fruit-to-bucket-or-die";
import { IFruit } from "../interfaces/fruit-interface";

export const useAppStore = create<IApplicationState>((set) => ({
  buckets: [],
  fruits: [],
  addBucket: (bucket: IBucket) =>
    set((state) => ({ buckets: [...state.buckets, bucket] })),
  addFruit: (fruit: IFruit) =>
    set((state) => ({ fruits: [...state.fruits, fruit] })),
  removeBucket: (id: string) =>
    set((state) => ({
      buckets: removeBucketOrDie(id, state.buckets),
    })),
  addFruitToBucket: (bucketId: string, fruitId: string) =>
    set((state) => ({
      ...addFruitToBucketOrDie({
        bucketId,
        buckets: state.buckets,
        fruits: state.fruits,
        fruit: state.fruits.find((f) => f.id === fruitId),
      }),
    })),
}));
