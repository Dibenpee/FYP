import { cn } from "../../lib/utils";
import { Label } from "./label";
import { forwardRef } from "react";

const FormField = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

const FormItem = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

const FormLabel = forwardRef(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} />
));
FormControl.displayName = "FormControl";

const FormDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

const FormMessage = forwardRef(
  ({ className, children, ...props }, ref) => {
    if (!children) {
      return null;
    }

    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-destructive", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};
