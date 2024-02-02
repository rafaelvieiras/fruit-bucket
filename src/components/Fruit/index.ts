import { FruitActionComponent } from "@/components/Fruit/FruitAction";
import { FruitActionPopupComponent } from "@/components/Fruit/FruitActionPopup";
import { FruitActionPopupItemComponent } from "@/components/Fruit/FruitActionPopupItem";
import { FruitActionsComponent } from "@/components/Fruit/FruitActions";
import { FruitNameComponent } from "@/components/Fruit/FruitName";
import { FruitPriceComponent } from "@/components/Fruit/FruitPrice";
import { FruitRootComponent } from "@/components/Fruit/FruitRoot";

export const Fruit = {
  Root: FruitRootComponent,
  Name: FruitNameComponent,
  Price: FruitPriceComponent,
  Action: FruitActionComponent,
  Actions: FruitActionsComponent,
  ActionPopup: FruitActionPopupComponent,
  PopupItem: FruitActionPopupItemComponent,
};
