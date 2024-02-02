import { ReactNode } from "react";

interface FruitRootComponentProps {
  children: ReactNode;
}

export function FruitRootComponent({ children }: FruitRootComponentProps) {
  return (
    <div className="flex flex-col min-w-[45%] border shadow-md gap-3 p-3 bg-slate-100">
      {children}
    </div>
  );
}
