import type { VariantProps } from "class-variance-authority";
import type React from "react";
import Text from "../text";
import { badgeVariants } from "./badgeVariants";
import { textVariants } from "./textVariants";

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={textVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
