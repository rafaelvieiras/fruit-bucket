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
      <label>{label}</label>
      <input ref={ref} {...rest} />
      {fieldError && <span>{fieldError.message}</span>}
    </>
  );
});
