import { ButtonHTMLAttributes, ReactNode } from "react";

interface FruitActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function FruitActionComponent({ children, ...rest }: FruitActionProps) {
  return (
    <button className="btn btn-outline btn-secondary btn-sm" {...rest}>
      {children}
    </button>
  );
}
