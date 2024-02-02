import { IApplicationState } from "@/interfaces/application-state-interface";
import { IBucket } from "@/interfaces/bucket-interface";
import { IFruit } from "@/interfaces/fruit-interface";
import { canAddFruitToBucket } from "@/utils/can-add-fruit-to-bucket";
interface IAddFruitToBucketOrDieProps {
  bucket: IBucket;
  fruit: IFruit;
  state: IApplicationState;
}

export function addFruitToBucketOrDie({
  bucket,
  fruit,
  state,
}: IAddFruitToBucketOrDieProps): { buckets: IBucket[]; fruits: IFruit[] } {
  if (!fruit) {
    throw new Error(`Fruit not found`);
  }

  if (!bucket) {
    throw new Error(`Bucket not found`);
  }

  if (!canAddFruitToBucket(bucket)) {
    throw new Error(`Bucket is full`);
  }

  const previousBucket = state.buckets.find(
    (b) => b.id === fruit.allocatedBucketId
  );

  if (previousBucket) {
    previousBucket.fruits = previousBucket.fruits.filter((f) => f !== fruit.id);
  }

  bucket.fruits.push(fruit.id);
  fruit.allocatedBucketId = bucket.id;

  return {
    buckets: state.buckets.map((b) => (b.id === bucket.id ? bucket : b)),
    fruits: state.fruits.map((f) => (f.id === fruit.id ? fruit : f)),
  };
}
