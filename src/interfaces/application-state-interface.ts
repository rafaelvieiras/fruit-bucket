import { IBucket } from "./bucket-interface";
import { IFruit } from "./fruit-interface";

export interface IApplicationState {
  buckets: IBucket[];
  fruits: IFruit[];
  addFruit: (fruit: IFruit) => void;
  addBucket: (bucket: IBucket) => void;
  removeBucket: (id: string) => void;
}
