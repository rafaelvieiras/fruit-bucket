export interface IToast {
  id: string;
  message: string;
  type: "success" | "error";
}

export interface IToastContext {
  toasts: IToast[];
  addToast: (toast: IToast) => void;
  removeToast: (id: string) => void;
}
