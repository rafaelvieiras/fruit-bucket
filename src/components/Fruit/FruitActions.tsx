import { HTMLAttributes, ReactNode } from "react";

interface FruitActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FruitActionsComponent({
  children,
  ...rest
}: FruitActionsProps) {
  return (
    <div
      className={`flex flex-row-reverse justify-between gap-2 p-2 ${rest.className}`}
    >
      {children}
    </div>
  );
}
