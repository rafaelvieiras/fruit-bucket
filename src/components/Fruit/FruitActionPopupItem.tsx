import { ButtonHTMLAttributes } from "react";

interface FruitActionPopupItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function FruitActionPopupItemComponent({
  children,
  ...rest
}: FruitActionPopupItemProps) {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
}
