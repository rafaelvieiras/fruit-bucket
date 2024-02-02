import { IApplicationState } from "@/interfaces/application-state-interface";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { IBucket } from "@/interfaces/bucket-interface";
import { removeBucketOrDie } from "@/utils/remove-bucket-or-die";
import { addFruitToBucketOrDie } from "@/utils/add-fruit-to-bucket-or-die";
import { IFruit } from "@/interfaces/fruit-interface";
import { removeFruitOrDie } from "@/utils/remove-fruit-or-die";

export const useAppStore = create<IApplicationState>()(
  devtools(
    persist(
      (set) => ({
        bucketIndex: 0,
        buckets: [],
        fruits: [],
        increaseBucketIndex: () =>
          set((state) => ({ bucketIndex: state.bucketIndex + 1 })),
        addBucket: (bucket: IBucket) =>
          set((state) => ({ buckets: [...state.buckets, bucket] })),
        addFruit: (fruit: IFruit) =>
          set((state) => ({ fruits: [...state.fruits, fruit] })),
        removeBucket: (id: string) =>
          set((state) => ({
            buckets: removeBucketOrDie(id, state.buckets),
          })),
        addFruitToBucket: (bucket: IBucket, fruit: IFruit) =>
          set((state) => addFruitToBucketOrDie({ bucket, fruit, state })),
        removeFruit: (fruit: IFruit) =>
          set((state) => removeFruitOrDie({ fruit, state })),
      }),
      {
        name: "app-store",
      }
    ),
    { enabled: true }
  )
);
