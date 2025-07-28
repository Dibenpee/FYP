import { forwardRef } from "react";
import { Input } from "./ui/input";
import { FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";

const InputField = forwardRef(
  ({ label, error, helperText, className, ...props }, ref) => (
    <FormItem className="mt-4">
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Input
          ref={ref}
          className={`${error ? "border-red-500" : ""} ${className}`}
          {...props}
        />
      </FormControl>
      {helperText && (
        <FormMessage className={error ? "text-red-500" : "text-gray-500"}>
          {helperText}
        </FormMessage>
      )}
    </FormItem>
  )
);

InputField.displayName = "InputField";

export default InputField;
