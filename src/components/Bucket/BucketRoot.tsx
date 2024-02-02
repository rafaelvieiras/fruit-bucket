import { ReactNode } from "react";

interface BucketRootComponentProps {
  children: ReactNode;
}
export function BucketRootComponent({ children }: BucketRootComponentProps) {
  return (
    <div className="flex flex-col bg-slate-200 shadow-sm rounded-sm p-4">
      {children}
    </div>
  );
}
