import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import SubmitButton from "../../components/SubmitButton";
import { Card, CardContent } from "../../components/ui/card";
import vitalife from "../../assets/vitalife.svg";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img src={vitalife} alt="VitaLife logo" className="w-10 h-auto" />
            <h1 className="text-2xl font-bold text-gray-900">
              Vita<span className="text-green-600">Life</span>
            </h1>
          </div>
          <p className="text-gray-600">Welcome back to your health dashboard</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required!",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <InputField
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
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
                    message: "Password must be at least 8 characters",
                  },
                }}
                render={({ field }) => (
                  <InputField
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    {...field}
                  />
                )}
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <SubmitButton text="Sign In" />
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Login;
