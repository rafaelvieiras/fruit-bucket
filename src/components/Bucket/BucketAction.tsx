import { ButtonHTMLAttributes, ElementType } from "react";

interface BucketActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function BucketActionComponent({
  icon: Icon,
  ...rest
}: BucketActionProps) {
  return (
    <button className="btn btn-circle btn-outline" {...rest}>
      <Icon />
    </button>
  );
}
