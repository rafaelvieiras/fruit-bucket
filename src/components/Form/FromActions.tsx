import { ReactNode } from "react";

interface FormActionsProps {
  children: ReactNode;
}

export function FormActionsComponent({ children }: FormActionsProps) {
  return <div>{children}</div>;
}
