import { IBucket } from "@/interfaces/bucket-interface";
import { IFruit } from "@/interfaces/fruit-interface";

export interface IApplicationState {
  bucketIndex: number;
  increaseBucketIndex: () => void;
  fruits: IFruit[];
  addFruit: (fruit: IFruit) => void;
  addFruitToBucket: (bucket: IBucket, fruit: IFruit) => void;
  removeFruit: (fruit: IFruit) => void;
  buckets: IBucket[];
  addBucket: (bucket: IBucket) => void;
  removeBucket: (id: string) => void;
}
