import type { VariantProps } from "class-variance-authority";
import CheckboxIcon from "../../assets/icons/check.svg?react";
import Icon from "../icon";
import Skeleton from "../skeleton";
import { checkboxVariants } from "./checkboxVariants";
import { iconVariants } from "./iconVariants";
import { wrapperVariants } from "./wrapperVariants";

interface InputCheckboxProps
  extends VariantProps<typeof checkboxVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  loading?: boolean;
}

export default function InputCheckbox({
  size,
  disbaled,
  className,
  loading,
  variant,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={checkboxVariants({ size, variant: "none" })}
      />
    );
  }
  return (
    <label className={wrapperVariants({ className })}>
      <input
        type="checkbox"
        className={checkboxVariants({ variant, size, disbaled })}
        {...props}
      />
      <Icon className={iconVariants({ size })} svg={CheckboxIcon} />
    </label>
  );
}
