import { useState } from "react";
import Button from "./../Button";
import Input from "./Input";
import Label from "./Label";
import toast from "react-hot-toast";
import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";

function SignUpForm() {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let isDisabled;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleAuthenticator = async () => {
  //   const response= await axios.post
  // };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !signUpData.userName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      return toast.error("Please fill in all required fields.", {
        id: "Sign-up-error",
      });
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      return toast.error("Passwords did not match.", {
        id: "registration-error",
      });
    }

    isDisabled =
      !signUpData.userName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/users/register`,
        signUpData
      );
      if (response) {
        toast.success(response?.data?.message, { id: "Registration-success" });
        setSignUpData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message || "Registration failed", {
          id: "registration-error",
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSignUp}>
      <div className="space-y-1">
        <Label htmlFor={"input-userName"} labelTitle={"Enter Your Name:"} />
        <Input
          id="input-userName"
          type="text"
          name="userName"
          placeholder="Ravikant Tarare"
          value={signUpData.userName}
          onInputChange={handleInputChange}
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor={"input-email"} labelTitle={"Email address:"} />
        <Input
          id="input-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          value={signUpData.email}
          onInputChange={handleInputChange}
        />
      </div>

      <IKContext
        publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        // authenticator={handleAuthenticator}
      >
        <Label htmlFor={"input-email"} labelTitle={"Upload Profile Photo:"} />

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-300 bg-gray-50 overflow-hidden shadow-sm shrink-0">
            <img
              src=""
              alt="Profile Photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <IKUpload
            fileName="file-name.jpg"
            isPrivateFile={false}
            useUniqueFileName={true}
            checks={`"file.size" < "1mb"`}
            className="max-w-60 w-full text-sm text-gray-600 cursor-pointer transition file:px-3 file:py-1.5 file:mr-3 file:rounded-lg file:border file:border-gray-300 file:bg-gray-100 hover:file:bg-gray-200 file:text-sm file:font-medium file:cursor-pointer"
          />
        </div>
      </IKContext>

      <div className="space-y-1">
        <Label htmlFor={"input-password"} labelTitle={"Password:"} />
        <Input
          id="input-password"
          type="password"
          name="password"
          placeholder="••••••••"
          value={signUpData.password}
          onInputChange={handleInputChange}
        />
      </div>

      <div className="space-y-1">
        <Label
          htmlFor={"input-confirm-password"}
          labelTitle={"Re-Enter Password:"}
        />
        <Input
          id="input-confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••"
          value={signUpData.confirmPassword}
          onInputChange={handleInputChange}
        />
      </div>

      <div className="space-y-3 pt-2">
        <Button
          type="submit"
          btnTitle={isDisabled ? "Fill in all required fields" : "Sign Up"}
          btnVariant="primary"
          size="md"
          isDisabled={isDisabled}
          customStyle={`w-full ${
            isDisabled ? "opacity-50 !cursor-not-allowed" : ""
          }`}
        />
      </div>
    </form>
  );
}

export default SignUpForm;
