import { ButtonHTMLAttributes, ReactNode } from "react";

interface FruitActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label?: string;
}
export function FruitActionComponent({ children, ...rest }: FruitActionProps) {
  return (
    <div>
      <button {...rest}>{children}</button>
    </div>
  );
}
