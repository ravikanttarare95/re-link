import { useNavigate } from "react-router";
import ChatImg from "./../assets/home-images/chat-img.png";
import Button from "./../components/Button";
import BrandLogo from "./../components/BrandLogo";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import { GrChatOption } from "react-icons/gr";
import { BsChatRightText } from "react-icons/bs";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen max-w-6xl mx-auto p-6">
        <BrandLogo />

        <div className="  mt-12 grid md:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 order-2 md:order-1">
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

          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <span className="hidden lg:block absolute text-4xl -top-10 left-64 text-pink-500/85 rotate-12">
              <HiOutlineChatBubbleLeftRight />
            </span>

            <span className="hidden lg:block absolute text-3xl top-20 -right-2 text-violet-500/80 -rotate-6">
              <BsChatRightText />
            </span>

            <span className="hidden lg:block absolute text-4xl bottom-6 left-28 text-pink-500/90 rotate-12">
              <BiChat />
            </span>

            <span className="hidden lg:block absolute text-3xl top-36 left-8 text-violet-500/85 -rotate-12">
              <GrChatOption />
            </span>

            <span className="hidden lg:block absolute text-4xl bottom-16 -right-3 text-pink-500/80 rotate-20">
              <IoChatbubblesOutline />
            </span>

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
