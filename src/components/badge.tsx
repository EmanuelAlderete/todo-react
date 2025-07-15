import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { badgeTextVariants } from "./badgeTextVariants";
import { badgeVariants } from "./badgeVariants";
import Text from "./text";

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
      <Text variant="body-sm-bold" className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
