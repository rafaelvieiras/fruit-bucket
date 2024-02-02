import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface FromInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fieldError?: Partial<FieldError>;
}

export const FormInputComponent = forwardRef(function FormInputComponent(
  props: FromInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { label, fieldError, ...rest } = props;
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          className={`input input-bordered w-full ${
            !fieldError || "input-error"
          }`}
          ref={ref}
          {...rest}
        />
        <div className="label">
          {fieldError && (
            <span className="label-text-alt">{fieldError.message}</span>
          )}
        </div>
      </label>
    </>
  );
});
