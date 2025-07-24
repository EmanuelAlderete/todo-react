import type { VariantProps } from "class-variance-authority";
import type React from "react";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import Icon from "../icon/icon";
import Text from "../text/text";
import { buttonVariants } from "./buttonVariants";
import { iconVariants } from "./iconVariants";
import { textVariants } from "./textVariants";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  handling?: boolean;
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  handling,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className,
        handling,
      })}
      {...props}
    >
      {icon && (
        <Icon
          animate={handling}
          svg={handling ? SpinnerIcon : icon}
          className={iconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={textVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
