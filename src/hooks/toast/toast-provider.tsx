import { Toast } from "@/components/Toast";
import { IToast, IToastContext } from "@/interfaces/toast-interface";
import { ReactNode, createContext, useCallback, useState } from "react";

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastContext = createContext({} as IToastContext);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback(
    (toast: IToast) => {
      setToasts((prevToasts) => [...prevToasts, toast]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: string) => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <Toast.Container />
    </ToastContext.Provider>
  );
}
