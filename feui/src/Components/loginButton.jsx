import { Box, IconButton, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const LoginButton = () => {
  return (
    <Box textAlign="center" mt={4}>
      <IconButton sx={{ border: "2px solid black", p: 3 }}>
        <PowerSettingsNewIcon fontSize="large" />
      </IconButton>
      <Typography variant="h6" mt={2}>
        Log In
      </Typography>
    </Box>
  );
};

export default LoginButton;
