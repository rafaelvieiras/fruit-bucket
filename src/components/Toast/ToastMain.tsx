import { useToast } from "@/hooks/toast/toast-hook";
import { IToast } from "@/interfaces/toast-interface";
import { useEffect } from "react";

interface ToastMainProps {
  toast: IToast;
}
export function ToastMainComponent({ toast }: ToastMainProps) {
  const { removeToast } = useToast();
  const { id, message, type } = toast;

  const alertType = {
    error: "alert-info",
    success: "alert-success",
  }[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <div className={`alert max-w-full ${alertType}`}>{message}</div>;
}
