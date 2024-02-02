import { DialogHTMLAttributes } from "react";

interface FruitActionPopupProps
  extends DialogHTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  id: string;
}

export function FruitActionPopupComponent({
  children,
  ...rest
}: FruitActionPopupProps) {
  return (
    <dialog className="modal modal-bottom" {...rest}>
      <div className="modal-box flex flex-col items-start gap-4">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>fechar</button>
      </form>
    </dialog>
  );
}
