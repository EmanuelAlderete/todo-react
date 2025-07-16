import { cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import { textVariants } from "../text/textVariants";
import { textVariants as inputTextVariants } from "./textVariants";

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
