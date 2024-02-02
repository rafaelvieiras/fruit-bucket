import { ReactNode } from "react";

interface BucketRootComponentProps {
  children: ReactNode;
}
export function BucketRootComponent({ children }: BucketRootComponentProps) {
  return <div>{children}</div>;
}
