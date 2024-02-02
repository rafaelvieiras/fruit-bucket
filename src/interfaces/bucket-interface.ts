import { IFruit } from "./fruit-interface";

export interface IBucket {
  id: string;
  maxCapacity: number;
  currentValue?: number;
  fruits: IFruit[];
}
