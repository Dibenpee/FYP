import { Button } from "./ui/button";
import { Power } from "lucide-react";

const LoginButton = () => {
  return (
    <div className="text-center mt-8">
      <Button
        variant="outline"
        size="icon"
        className="border-2 border-black p-6 h-auto w-auto"
      >
        <Power size={24} />
      </Button>
      <h6 className="text-lg font-semibold mt-4">Log In</h6>
    </div>
  );
};

export default LoginButton;
