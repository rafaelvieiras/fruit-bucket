import { ButtonHTMLAttributes, ElementType } from "react";

interface BucketActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function BucketActionComponent({
  icon: Icon,
  ...rest
}: BucketActionProps) {
  return (
    <button {...rest}>
      <Icon />
    </button>
  );
}
