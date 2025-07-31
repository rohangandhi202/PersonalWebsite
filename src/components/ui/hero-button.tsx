import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const heroButtonVariants = cva(
  "relative overflow-hidden font-inter font-medium transition-all duration-300 group",
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-primary text-primary-foreground",
          "hover:shadow-glow hover:scale-105",
          "border border-primary/20",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
          "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
        ],
        outline: [
          "border-2 border-primary text-primary bg-transparent",
          "hover:bg-primary hover:text-primary-foreground",
          "hover:shadow-glow hover:scale-105"
        ],
        ghost: [
          "text-primary bg-transparent",
          "hover:bg-primary/10 hover:text-primary-glow",
          "transition-all duration-300"
        ]
      },
      size: {
        default: "h-12 px-8",
        lg: "h-14 px-10 text-lg",
        sm: "h-10 px-6 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface HeroButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {}

const HeroButton = ({ className, variant, size, children, ...props }: HeroButtonProps) => {
  return (
    <Button
      className={cn(heroButtonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Button>
  );
};

export { HeroButton, heroButtonVariants };