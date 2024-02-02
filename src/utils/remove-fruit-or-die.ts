import { IApplicationState } from "@/interfaces/application-state-interface";
import { IFruit } from "@/interfaces/fruit-interface";

interface RemoveFruitOrDieProps {
  fruit: IFruit;
  state: IApplicationState;
}
export function removeFruitOrDie({ fruit, state }: RemoveFruitOrDieProps) {
  if (!fruit) {
    throw new Error(`Fruit not found`);
  }

  fruit.allocatedBucketId = undefined;

  return {
    buckets: state.buckets.map((b) => {
      if (b.fruits.includes(fruit.id)) {
        b.fruits = b.fruits.filter((f) => f !== fruit.id);
      }
      return b;
    }),
    fruits: state.fruits.map((f) => (f.id === fruit.id ? fruit : f)),
  };
}
