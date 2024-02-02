import { useAppStore } from "@/states/app-store";
import { FruitListItemComponent } from "@/components/FruitListItem";

export function FruitListComponent() {
  const buckets = useAppStore((state) => state.buckets);
  const fruits = useAppStore((state) => state.fruits);
  const fruitsAvailable = fruits.filter((fruit) => {
    return !fruit.allocatedBucketId;
  });
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">🍉 Frutas</h2>
      {fruitsAvailable.length === 0 && fruits.length > 0 && (
        <div className="alert">
          <span>Todas as frutas estão alocadas</span>
        </div>
      )}
      {fruits.length === 0 && (
        <div className="alert">
          <span>Você ainda não tem frutas</span>
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {fruitsAvailable.map((fruit) => (
          <FruitListItemComponent
            key={fruit.id}
            fruit={fruit}
            buckets={buckets}
          />
        ))}
      </div>
    </div>
  );
}
