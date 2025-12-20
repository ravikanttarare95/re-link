import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import { GrChatOption } from "react-icons/gr";
import { BsChatRightText } from "react-icons/bs";
import { RiChatSmile2Line } from "react-icons/ri";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineForum } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { PiChatsCircle } from "react-icons/pi";

const floatWithDelay = (delay: number): MotionProps => ({
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

function FloatingIcons() {
  return (
    <>
      <motion.span
        {...floatWithDelay(0)}
        className="hidden md:block absolute top-10 left-6 text-4xl text-pink-500/85 rotate-12"
      >
        <HiOutlineChatBubbleLeftRight />
      </motion.span>

      <motion.span
        {...floatWithDelay(0.4)}
        className="hidden md:block absolute bottom-36 right-40 text-3xl text-violet-500/80 -rotate-6"
      >
        <BsChatRightText />
      </motion.span>

      <motion.span
        {...floatWithDelay(0.8)}
        className="hidden md:block absolute top-12 right-6 text-4xl text-violet-500/75 rotate-12"
      >
        <MdOutlineForum />
      </motion.span>

      <motion.span
        {...floatWithDelay(1.2)}
        className="hidden md:block absolute top-1/4 left-32 text-4xl text-violet-500/75 -rotate-12"
      >
        <RiChatSmile2Line />
      </motion.span>

      <motion.span
        {...floatWithDelay(1.6)}
        className="hidden lg:block absolute top-1/4 right-32 text-4xl text-pink-500/85 rotate-6"
      >
        <GrChatOption />
      </motion.span>

      <motion.span
        {...floatWithDelay(2)}
        className="hidden md:block absolute top-1/2 left-12 text-4xl text-pink-500/90 rotate-12"
      >
        <BiChat />
      </motion.span>

      <motion.span
        {...floatWithDelay(2.4)}
        className="hidden lg:block absolute top-1/2 right-12 text-3xl text-violet-500/85 -rotate-12"
      >
        <FaRegCommentDots />
      </motion.span>

      <motion.span
        {...floatWithDelay(2.8)}
        className="hidden md:block absolute bottom-0 left-20 text-4xl text-violet-500/80 rotate-6"
      >
        <TbMessageCircle />
      </motion.span>

      <motion.span
        {...floatWithDelay(3.2)}
        className="hidden md:block absolute bottom-40 left-52 text-4xl text-pink-500/75 -rotate-6"
      >
        <PiChatsCircle />
      </motion.span>

      <motion.span
        {...floatWithDelay(3.6)}
        className="hidden md:block absolute bottom-8 right-20 text-4xl text-pink-500/80 rotate-20"
      >
        <IoChatbubblesOutline />
      </motion.span>
    </>
  );
}

export default FloatingIcons;
