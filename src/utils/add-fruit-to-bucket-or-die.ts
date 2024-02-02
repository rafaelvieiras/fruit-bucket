import { IBucket } from "../interfaces/bucket-interface";
import { IFruit } from "../interfaces/fruit-interface";
interface IAddFruitToBucketOrDieProps {
  bucketId: string;
  buckets: IBucket[];
  fruit?: IFruit;
  fruits: IFruit[];
}

export function addFruitToBucketOrDie({
  bucketId,
  buckets,
  fruit,
  fruits,
}: IAddFruitToBucketOrDieProps) {
  if (!fruit) {
    throw new Error(`Fruit not found`);
  }
  const bucket = buckets.find((bucket) => bucket.id === bucketId);
  if (!bucket) {
    throw new Error(`Bucket with id ${bucketId} not found`);
  }
  const totalOfFruitsOnBucket = bucket?.fruits.length || 0;

  if (totalOfFruitsOnBucket >= bucket.maxCapacity) {
    throw new Error(`Bucket with id ${bucketId} is full`);
  }

  bucket.fruits.push(fruit);

  const fruitIndex = fruits.findIndex((f) => f.id === fruit.id);

  if (fruitIndex !== -1) {
    fruits.splice(fruitIndex, 1);
  }

  return {
    buckets,
    fruits,
  };
}
