import type { VariantProps } from "class-variance-authority";
import Icon from "../icon";
import { buttonIconVariants } from "./buttonIconVariants";
import { iconVariants } from "./iconVariants";

interface ButtonIconProps
  extends VariantProps<typeof iconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={iconVariants({ variant, size })} />
    </button>
  );
}
