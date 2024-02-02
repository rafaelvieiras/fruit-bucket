import { useToast } from "@/hooks/toast/toast-hook";
import { IBucket } from "@/interfaces/bucket-interface";
import { IFruit } from "@/interfaces/fruit-interface";
import { useAppStore } from "@/states/app-store";
import { canAddFruitToBucket } from "@/utils/can-add-fruit-to-bucket";
import { Fruit } from "@/components/Fruit";
import { v4 as uuid } from "uuid";

interface FruitListItemProps {
  fruit: IFruit;
  buckets: IBucket[];
  canRemove?: boolean;
}
export function FruitListItemComponent({
  fruit,
  buckets,
  canRemove,
}: FruitListItemProps) {
  const addFruitToBucket = useAppStore((state) => state.addFruitToBucket);
  const removeFruit = useAppStore((state) => state.removeFruit);
  const { addToast } = useToast();

  const modalId = uuid();

  const handleAddFruitToBucket = (bucket: IBucket, fruit: IFruit) => {
    if (!bucket) {
      return;
    }
    if (!canAddFruitToBucket(bucket)) {
      addToast({
        id: Date.now().toString(),
        type: "error",
        message: "O balde está cheio",
      });
      return;
    }
    addFruitToBucket(bucket, fruit);
    addToast({
      id: Date.now().toString(),
      type: "success",
      message: `Fruta movida para o Balde`,
    });
    handleCloseModal();
  };

  const handleOpenModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  const handleRemoveFruit = (fruit: IFruit) => {
    removeFruit(fruit);
    addToast({
      id: Date.now().toString(),
      type: "success",
      message: "Fruta removida do balde",
    });
  };

  const bucketsWithoutThisFruit = buckets.filter((bucket) => {
    return !bucket.fruits.includes(fruit.id);
  });

  return (
    <Fruit.Root key={fruit.id}>
      <Fruit.Name>{fruit.name}</Fruit.Name>
      <Fruit.Price>
        {fruit.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Fruit.Price>
      <Fruit.Actions>
        <Fruit.Action onClick={handleOpenModal}>Mover</Fruit.Action>
        {canRemove && (
          <Fruit.Action
            className="btn btn-link btn-sm"
            onClick={() => handleRemoveFruit(fruit)}
          >
            Remover
          </Fruit.Action>
        )}
      </Fruit.Actions>

      <Fruit.ActionPopup id={modalId}>
        {buckets.length === 0 ? (
          <div>Você precisa criar um balde antes de mover a fruta</div>
        ) : (
          <h3>Selecione um dos Baldes para mover a fruta</h3>
        )}

        {bucketsWithoutThisFruit.map((bucket) => (
          <Fruit.PopupItem
            key={bucket.id}
            onClick={() => handleAddFruitToBucket(bucket, fruit)}
          >
            {bucket.name}
          </Fruit.PopupItem>
        ))}
      </Fruit.ActionPopup>
    </Fruit.Root>
  );
}
