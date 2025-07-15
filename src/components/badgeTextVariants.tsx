import { cva } from "class-variance-authority";


export const badgeTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-green-dark",
            secondary: "text-pink-dark",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});
