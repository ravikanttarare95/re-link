import { useState } from "react";
import Button from "./../Button";
import Input from "./Input";
import Label from "./Label";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  let isDisabled;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      return toast.error("Please enter both email and password.", {
        id: "login-error",
      });
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/users/login`,
        {
          email: loginData.email,
          password: loginData.password,
        }
      );

      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: "login-success" });
        if (response?.data?.user) {
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(response.data.user)
          );
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }
        setLoginData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return toast.error(error?.response?.data?.message, {
          id: "login-error",
        });
      }
    }
    isDisabled = !loginData.email || !loginData.password;
  };

  return (
    <form className="space-y-5" onSubmit={handleLoginSubmit}>
      <div className="space-y-1">
        <Label
          htmlFor={"input-email"}
          labelTitle={"Email address"}
          isMandatory={true}
        />
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
        <Label
          htmlFor={"input-password"}
          labelTitle={"Password"}
          isMandatory={true}
        />
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
