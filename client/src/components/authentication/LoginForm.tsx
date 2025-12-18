import { useState } from "react";
import Button from "./../Button";
import Input from "./Input";
import Label from "./Label";
import toast from "react-hot-toast";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  let isDisabled;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return toast.error("Please enter both email and password.", {
        id: "login-error",
      });
    }

    isDisabled = !loginData.email || !loginData.password;
  };

  return (
    <form className="space-y-5" onSubmit={handleLoginSubmit}>
      <div className="space-y-1">
        <Label htmlFor={"input-email"} labelTitle={"Email address:"} />
        <Input
          id="input-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={loginData.email}
          onInputChange={handleInputChange}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor={"input-password"} labelTitle={"Password"} />
        <Input
          id="input-password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={loginData.password}
          onInputChange={handleInputChange}
        />
      </div>

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          btnTitle={isDisabled ? "Enter email & password" : "Login"}
          btnVariant="primary"
          size="md"
          isDisabled={isDisabled}
          customStyle={`w-full ${
            isDisabled ? "opacity-50 !cursor-not-allowed" : ""
          }`}
        />

        <Button
          type="button"
          btnTitle="Login as Guest"
          btnVariant="secondary"
          size="md"
          customStyle="w-full"
          onBtnClick={() => {}}
        />
      </div>
    </form>
  );
}

export default LoginForm;
