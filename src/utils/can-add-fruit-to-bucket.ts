import { IBucket } from "@/interfaces/bucket-interface";

export function canAddFruitToBucket(bucket: IBucket) {
  return bucket.maxCapacity >= bucket.fruits.length + 1;
}
