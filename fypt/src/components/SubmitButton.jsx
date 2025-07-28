import { Button } from "./ui/button";

const SubmitButton = ({ text, className, ...props }) => (
  <Button
    type="submit"
    className={`w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    {...props}
  >
    {text}
  </Button>
);

export default SubmitButton;
