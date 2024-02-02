import { ReactNode } from "react";

interface FruitRootComponentProps {
  children: ReactNode;
}

export function FruitRootComponent({ children }: FruitRootComponentProps) {
  return <div>{children}</div>;
}
