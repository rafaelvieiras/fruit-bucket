import { ButtonHTMLAttributes, ReactNode } from "react";

interface FormActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function FormActionComponent({ children, ...rest }: FormActionProps) {
  return <button {...rest}>{children}</button>;
}
