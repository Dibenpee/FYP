import { Box } from "@mui/material";
import MainTitle from "../Components/Title";
import vitalife from "../assets/vitalife.svg";
import Wlcmsg from "../Components/Wlcmsg";
import { Padding } from "@mui/icons-material";
import LoginButton from "../Components/loginButton";

const LandingPage = () => {
  return (
   <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "80vh",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 10 },
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
        <img
          src={vitalife}
          alt="vitalife logo"
          style={{ width: "80px", height: "auto"}}
        />  
      <MainTitle title="h2"style={{}}/>
      <Wlcmsg user="Dibyanshu"/>
      <LoginButton/>
    </Box>
  );
}

export default LandingPage