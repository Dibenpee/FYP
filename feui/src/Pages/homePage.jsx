import { Box, Button, Typography, useTheme } from "@mui/material";
import vitalife from "../assets/vitalife.svg";
import MainTitle from "../Components/Title";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 10 },
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box sx={{ mb: 1 }}>
        <img
          src={vitalife}
          alt="vitalife logo"
          style={{ width: "150px", height: "auto" }}
        />
      </Box>

      <MainTitle title="h1" />

      <Box
        sx={{
          textAlign: "center",
          maxWidth: { xs: "90%", sm: "80%", md: "60%" },
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Centralized Warehouse For Medical Reports
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          No More Paper Trails. No More Missing Files. Just You And Your
          Complete Health Story
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Before You Get Started
        </Typography>
      </Box>
        <NavLink to={'/register'}>
      <Button
        variant="contained"
        sx={{
          width: { xs: "80%", sm: 300 },
          bgcolor: "gray",
          borderRadius: "20px",
          mb: 2,
        }}
      >
        Sign Up
      </Button>
      </NavLink>

      <Typography variant="body2">If You Already Have An Account.</Typography>
      <NavLink 
      to={'/login'}>
      <Button
        href="/login"
        variant="contained"
        sx={{
          width: { xs: "80%", sm: 300 },
          bgcolor: "gray",
          borderRadius: "20px",
        }}
      >
        Log In
      </Button>
      </NavLink>
    </Box>
  );
};

export default HomePage;
