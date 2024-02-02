import { ReactNode } from "react";

interface BucketNameProps {
  children: ReactNode;
}
export function BucketNameComponent({ children }: BucketNameProps) {
  return <div className="flex flex-col text-2xl font-bold">{children}</div>;
}
