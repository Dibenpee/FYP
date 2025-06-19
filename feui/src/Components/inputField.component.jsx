import { TextField } from "@mui/material";
import { forwardRef } from "react";

const InputField = forwardRef(({ label, error, helperText, ...props }, ref) => (
  <TextField
    fullWidth
    label={label}
    variant="outlined"
    margin="normal"
    inputRef={ref}
    error={error}
    helperText={helperText}
    {...props}
  />
));

export default InputField;