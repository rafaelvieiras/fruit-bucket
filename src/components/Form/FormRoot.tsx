import { FormHTMLAttributes, ReactNode } from "react";

interface FormRootComponentProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}
export function FormRootComponent({
  children,
  ...rest
}: FormRootComponentProps) {
  return <form {...rest}>{children}</form>;
}
