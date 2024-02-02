import { ReactNode } from "react";
interface FruitPriceProps {
  children: ReactNode;
}

export function FruitPriceComponent({ children }: FruitPriceProps) {
  return <div className="badge">{children}</div>;
}
