import { Button } from "@mui/material";


const SubmitButton = ({ text }) => (
  <Button
    fullWidth
    type="submit"
    variant="contained"
    sx={{ 
      mt: 2, 
      borderRadius: 20, 
      bgcolor:'gray',
      ':hover':{bgcolor:"gray-400 "} }}
  >
    {text}
  </Button>
);

export default SubmitButton;