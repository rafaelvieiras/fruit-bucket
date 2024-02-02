import { IBucket } from "@/interfaces/bucket-interface";

export function removeBucketOrDie(
  id: string,
  bucketList: IBucket[]
): IBucket[] {
  const bucket = bucketList.find((bucket) => bucket.id === id);
  if (!bucket) {
    throw new Error(`Bucket with id ${id} not found`);
  }
  return bucketList.filter((bucket) => bucket.id !== id);
}
