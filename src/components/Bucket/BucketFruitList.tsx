import { ReactNode } from "react";
import { IBucket } from "@/interfaces/bucket-interface";
import { FruitListItemComponent } from "@/components/FruitListItem";
import { useAppStore } from "@/states/app-store";

interface BucketFruitListProps {
  children?: ReactNode;
  bucket: IBucket;
}

export function BucketFruitListComponent({
  children,
  bucket,
}: BucketFruitListProps) {
  const fruitsState = useAppStore((state) => state.fruits);
  const buckets = useAppStore((state) => state.buckets);
  const { fruits: fruitId } = bucket;
  const fruits = fruitsState.filter((fruit) => fruitId.includes(fruit.id));

  return (
    <div>
      {children}
      {fruits && (
        <div>
          {fruits.map((fruit, index) => (
            <FruitListItemComponent
              key={index}
              fruit={fruit}
              buckets={buckets}
              canRemove={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
