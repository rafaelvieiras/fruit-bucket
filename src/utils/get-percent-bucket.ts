import { IBucket } from "@/interfaces/bucket-interface";

export function getPercentBucket(bucket: IBucket) {
  const { fruits, maxCapacity } = bucket;
  return ((fruits.length / maxCapacity) * 100).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
}
