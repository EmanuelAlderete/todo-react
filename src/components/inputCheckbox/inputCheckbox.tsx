import type { VariantProps } from "class-variance-authority";
import CheckboxIcon from "../../assets/icons/check.svg?react";
import Icon from "../icon";
import { checkboxVariants } from "./checkboxVariants";
import { iconVariants } from "./iconVariants";
import { wrapperVariants } from "./wrapperVariants";

interface InputCheckboxProps
  extends VariantProps<typeof checkboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputCheckbox({
  size,
  disbaled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={wrapperVariants({ className })}>
      <input
        type="checkbox"
        className={checkboxVariants({ size, disbaled })}
        {...props}
      />
      <Icon className={iconVariants({ size })} svg={CheckboxIcon} />
    </label>
  );
}
