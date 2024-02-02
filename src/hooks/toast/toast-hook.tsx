import { useContext } from "react";
import { ToastContext } from "@/hooks/toast/toast-provider";

export function useToast() {
  const toastHelpers = useContext(ToastContext);
  return toastHelpers;
}
