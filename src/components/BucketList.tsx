import { IBucket } from "@/interfaces/bucket-interface";
import { useAppStore } from "@/states/app-store";
import { Bucket } from "@/components/Bucket";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/toast/toast-hook";

export function BucketListComponent() {
  const { addToast } = useToast();

  const buckets = useAppStore((state) => state.buckets).sort((a, b) => {
    return b.fruits.length / b.maxCapacity - a.fruits.length / a.maxCapacity;
  });

  const removeBucket = useAppStore((state) => state.removeBucket);
  const handleRemoveBucket = (bucket: IBucket) => {
    if (bucket.fruits.length > 0) {
      return addToast({
        id: Date.now().toString(),
        type: "error",
        message: "Você não pode remover baldes com frutas",
      });
    }

    removeBucket(bucket.id);
    addToast({
      id: Date.now().toString(),
      type: "success",
      message: "Balde removido com sucesso",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">🪣 Baldes</h2>
      {buckets.length === 0 && (
        <div className="alert">
          <span>Você ainda não tem baldes</span>
        </div>
      )}
      <div className="grid gap-4 lg:grid-cols-3">
        {buckets.map((bucket) => (
          <Bucket.Root key={bucket.id}>
            <div className="flex justify-between">
              <Bucket.Name>{bucket.name ?? "Balde"}</Bucket.Name>
              <Bucket.Actions>
                <Bucket.Action
                  icon={Trash2}
                  onClick={() => handleRemoveBucket(bucket)}
                />
              </Bucket.Actions>
            </div>
            <Bucket.Status bucket={bucket} />
            <Bucket.Fruits bucket={bucket} />
          </Bucket.Root>
        ))}
      </div>
    </div>
  );
}
