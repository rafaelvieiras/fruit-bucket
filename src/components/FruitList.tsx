import { useAppStore } from "../states/app-store";
import { Fruit } from "./Fruit";

export function FruitListComponent() {
  const fruits = useAppStore((state) => state.fruits);
  return (
    <div>
      <h1>Fruits</h1>
      <div>
        {fruits.map((fruit) => (
          <Fruit.Root key={fruit.id}>
            {fruit.name}
            <Fruit.Price>
              {fruit.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Fruit.Price>
          </Fruit.Root>
        ))}
      </div>
    </div>
  );
}
