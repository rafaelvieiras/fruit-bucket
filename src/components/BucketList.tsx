import { useAppStore } from "../states/app-store";
import { Bucket } from "./Bucket";
import { Trash2 } from "lucide-react";

export function BucketListComponent() {
  const buckets = useAppStore((state) => state.buckets);
  const removeBucket = useAppStore((state) => state.removeBucket);

  return (
    <div>
      <h1>Buckets</h1>
      <div>
        {buckets.map((bucket) => (
          <Bucket.Root key={bucket.id}>
            <Bucket.Actions>
              <Bucket.Action
                icon={Trash2}
                onClick={() => {
                  console.log("delete");
                  removeBucket(bucket.id);
                }}
              />
            </Bucket.Actions>
          </Bucket.Root>
        ))}
      </div>
    </div>
  );
}
