import { useNavigate } from "react-router";
import ChatImg from "./../assets/home-images/chat-img.png";
import Button from "./../components/Button";
import BrandLogo from "./../components/BrandLogo";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen bg-gray-50 px-6 py-8">
        <BrandLogo />

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Reconnect through{" "}
              <span className="text-pink-500">conversations</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              A modern chat platform designed to keep your conversations simple,
              fast, and meaningful.
            </p>

            <div className="flex gap-4 pt-2">
              <Button
                type={"button"}
                btnTitle={"Get Started"}
                btnVariant={"primary"}
                size="lg"
                onBtnClick={() => {
                  navigate("/authenticate");
                }}
              />
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            {/* <span className="absolute text-4xl -top-10 left-12">💬</span>
            <span className="absolute text-3xl top-10 -left-6">📩</span>
            <span className="absolute text-4xl bottom-16 -left-10">✨</span>
            <span className="absolute text-3xl -top-6 right-16">❤️</span>
            <span className="absolute text-4xl bottom-8 right-0">🚀</span> */}
            <img
              src={ChatImg}
              alt="Chat Illustration"
              className="w-full max-sm:max-w-xs sm:max-w-md sm:rotate-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
