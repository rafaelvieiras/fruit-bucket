import { useToast } from "@/hooks/toast/toast-hook";
import { Toast } from "@/components/Toast";

export function ToastContainerComponent() {
  const { toasts } = useToast();
  return (
    <div className="toast toast-end">
      {toasts.map((toast) => (
        <Toast.Main key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
