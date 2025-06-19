import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import InputField from "../../Components/inputField.component";
import SubmitButton from "../../Components/submitButton.component";
import { NavLink } from "react-router-dom";
const Register = () => {
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
        ></IconButton>
        <Box>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Sign up
          </Typography>
          <Typography variant="body2" mb={1}>
            Create a new account
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <InputField
                label="Username"
                placeholder="Username"
                error={!!errors.username}
                helperText={errors.username?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
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
                helperText={errors.email?.message || "Must be a valid domain!"}
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
                  errors.password?.message || "Must be 8-16 Characters"
                }
                {...field}
              />
            )}
          />

          <SubmitButton text="Sign up" />
        </form>
        <Box>
          <Typography variant="body2" mt={1}>
            Already Have a Account?
            <NavLink to={"/Login"}>Log in</NavLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
