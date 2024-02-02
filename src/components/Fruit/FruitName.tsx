import { HTMLAttributes, ReactNode } from "react";

interface FruitNameProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FruitNameComponent({ children, ...rest }: FruitNameProps) {
  return (
    <div className={`text-xl font-bold capitalize ${rest.className}`}>
      {children}
    </div>
  );
}
