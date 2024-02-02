import { HtmlHTMLAttributes, ReactNode } from "react";

interface FormActionsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function FormActionsComponent({ children, ...rest }: FormActionsProps) {
  return (
    <div className={`flex flex-row-reverse p-4 ${rest.className}`}>
      {children}
    </div>
  );
}
