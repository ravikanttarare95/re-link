import { useState } from "react";
import Button from "./../components/Button";
import BrandLogo from "./../components/BrandLogo";

type AuthView = "login" | "signup";

function Authentication() {
  const [activeView, setActiveView] = useState<AuthView>("login");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-10">
      <BrandLogo />

      <div className="flex rounded-3xl shadow-2xl overflow-hidden bg-white max-w-3xl w-full">
        <div className="hidden md:flex w-80 bg-linear-to-t from-violet-400 to-pink-400 text-white p-8 items-center justify-center">
          <div className="space-y-4 text-center">
            {activeView === "login" && (
              <>
                <h2 className="text-3xl font-bold">Welcome Back</h2>
                <p className="text-sm opacity-90">
                  Login to continue your journey
                </p>
              </>
            )}

            {activeView === "signup" && (
              <>
                <h2 className="text-3xl font-bold">Create Account</h2>
                <p className="text-sm opacity-90">
                  Sign up to get started with ReLink
                </p>
              </>
            )}
          </div>
        </div>

        <div className="flex-1 p-8 space-y-6">
          <div className="flex gap-4 justify-center">
            <Button
              type="button"
              btnTitle="Login"
              btnVariant={activeView === "login" ? "primary" : "secondary"}
              size="md"
              onBtnClick={() => setActiveView("login")}
            />

            <Button
              type="button"
              btnTitle="Sign Up"
              btnVariant={activeView === "signup" ? "primary" : "secondary"}
              size="md"
              onBtnClick={() => setActiveView("signup")}
            />
          </div>

          <div className="h-px bg-gray-200" />

          {activeView === "login" && (
            <div className="h-28 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              Login Form
            </div>
          )}

          {activeView === "signup" && (
            <div className="h-28 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              Sign Up Form
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
