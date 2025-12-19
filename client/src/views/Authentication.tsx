import { useState } from "react";
import Button from "./../components/Button";
import BrandLogo from "./../components/BrandLogo";
import AuthPanelContent from "./../components/authentication/AuthPanelContent";
import { authPanelContent } from "./../constants/authentication/authPanelContent.ts";
import { type AuthView } from "./../constants/authentication/authPanelContent.ts";
import LoginForm from "./../components/authentication/LoginForm.tsx";
import SignUpForm from "./../components/authentication/SignUpForm.tsx";
import FloatingIcons from "./../components/FloatingIcons";

function Authentication() {
  const [activeView, setActiveView] = useState<AuthView>("login");

  return (
    <div className="min-h-screen relative flex flex-col items-center p-6 space-y-10">
      <BrandLogo customStyle="max-md:!mr-auto" />

      <div className="flex rounded-3xl shadow-2xl overflow-hidden bg-white max-w-3xl w-full">
        <div className="hidden md:flex w-80 bg-gradient-to-t from-violet-400 to-pink-400 text-white p-8 items-center justify-center">
          <div className="space-y-4 text-center">
            <AuthPanelContent
              title={authPanelContent[activeView].title}
              subtitle={authPanelContent[activeView].subtitle}
            />
          </div>
        </div>

        <div className="flex-1 p-8 space-y-6">
          <div className="flex gap-4 justify-center">
            <Button
              type="button"
              btnTitle="Login"
              btnVariant={activeView === "login" ? "primary" : "secondary"}
              size="md"
              customStyle="!w-full"
              onBtnClick={() => setActiveView("login")}
            />

            <Button
              type="button"
              btnTitle="Sign Up"
              btnVariant={activeView === "signup" ? "primary" : "secondary"}
              size="md"
              customStyle="!w-full"
              onBtnClick={() => setActiveView("signup")}
            />
          </div>

          <div className=" md:overflow-auto px-0 md:h-[306px]">
            {activeView === "login" && <LoginForm />}
            {activeView === "signup" && <SignUpForm />}
          </div>
        </div>
      </div>
      <FloatingIcons />
    </div>
  );
}

export default Authentication;
