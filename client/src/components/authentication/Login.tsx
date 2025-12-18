import { useState } from "react";
import Button from "./../../components/Button";
import Input from "./Input";
import Label from "./Label";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="space-y-5">
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
          btnTitle="Login"
          btnVariant="primary"
          size="md"
          customStyle="w-full"
          onBtnClick={() => {}}
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
