import { cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import Skeleton from "../skeleton";
import Text from "../text";
import { badgeSkeletonVariants } from "./badgeSkeletonVariants";
import { badgeVariants } from "./badgeVariants";
import { textVariants } from "./textVariants";

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  loading?: boolean;
}

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={textVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
