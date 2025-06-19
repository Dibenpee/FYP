import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../Components/inputField.component";
import SubmitButton from "../../Components/submitButton.component"
import { NavLink } from "react-router-dom";

const Login =()=>{
     const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
      };
    
    
    
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            bgcolor: "#A2A2AA",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              width: { xs: "90%", sm: 400 },
              bgcolor: "#f5f5f5",
              position: "relative",
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
            </IconButton>
            <Box >
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Log In
            </Typography>
            <Typography variant="body2" mb={1}>
              Please Enter Your Detail
            </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required!",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Must be a valid domain!",
                  },
                }}
                render={({ field }) => (
                  <InputField
                    label="Email"
                    placeholder="Email Address"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    {...field}
                  />
                )}
              />
    
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must be 8-16 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Must be 8-16 characters",
                  },
                }}
                render={({ field }) => (
                  <InputField
                    label="Password"
                    placeholder="Create Password"
                    type="password"
                    error={!!errors.password}
                    helperText={
                  errors.password?.message}
                    {...field}
                  />
                )}
              />
    
              <SubmitButton text="Log In"/>
            </form>
            <NavLink >
                <Typography variant="body2" mt={1}>
                    Forgot Password?
                </Typography>
            </NavLink>
            <Typography variant="body2" mt={1}>
                New Here? 
                <NavLink to={'/register'}>
                    Sign up
                </NavLink>
            </Typography>
          </Paper>
        </Box>
      );
}
export default Login;