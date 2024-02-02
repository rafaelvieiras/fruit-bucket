import { IBucket } from "@/interfaces/bucket-interface";
import { useAppStore } from "@/states/app-store";
import { getPercentBucket } from "@/utils/get-percent-bucket";

interface BucketStatusProps {
  bucket: IBucket;
}

export function BucketStatusComponent({ bucket }: BucketStatusProps) {
  const percent = getPercentBucket(bucket);
  const fruits = useAppStore((state) => state.fruits);

  const sumAllFruits = fruits.reduce((acc, fruit) => {
    if (bucket.fruits.includes(fruit.id)) {
      return acc + fruit.price;
    }
    return acc;
  }, 0);

  return (
    <div className="flex flex-col gap-2 my-2">
      <span className="badge">
        Valor do Balde:{" "}
        {sumAllFruits.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <span className="badge">
        Frutas: {bucket.fruits.length}/{bucket.maxCapacity}
      </span>
      <div className="flex gap-2 items-center">
        <progress
          className="progress w-56"
          value={percent}
          max="100"
        ></progress>
        {percent}%
      </div>
    </div>
  );
}
