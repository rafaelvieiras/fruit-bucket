export interface IBucket {
  id: string;
  index: number;
  name?: string;
  maxCapacity: number;
  currentValue?: number;
  fruits: string[];
}
