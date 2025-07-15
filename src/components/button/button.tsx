import type { VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "../icon/icon";
import Text from "../text/text";
import { buttonVariants } from "./buttonVariants";
import { iconVariants } from "./iconVariants";
import { textVariants } from "./textVariants";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconComponent && (
        <Icon svg={IconComponent} className={iconVariants({ variant, size })} />
      )}
      <Text variant="body-md-bold" className={textVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
