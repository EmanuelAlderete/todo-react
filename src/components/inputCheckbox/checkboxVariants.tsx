import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  `
    appearance-none peer flex items-center justify-center cursor-pointer
    border-2 border-solid transition overflow-hidden border-green-base 
    hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
`,
  {
    variants: {
      size: {
        md: "w-5 h-5 rounded-sm",
      },
      disbaled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disbaled: false,
    },
  }
);
