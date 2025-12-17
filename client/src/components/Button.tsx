import React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  btnTitle?: String;
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnVariant?: ButtonVariant;
  customStyle?: String;
  size?: ButtonSize;
}

function Button({
  type,
  btnTitle,
  onBtnClick,
  btnVariant,
  customStyle = "",
  size = "md",
}: ButtonProps) {
  const variantClass =
    btnVariant === "primary"
      ? "bg-violet-600 hover:bg-violet-700 text-white"
      : btnVariant === "secondary"
      ? "border border-gray-300 hover:border-gray-400 text-gray-700"
      : "bg-slate-200 text-slate-900 hover:bg-slate-300";

  const sizeClass =
    size === "lg"
      ? "text-lg sm:text-xl px-8 py-3 rounded-lg shadow-lg font-bold "
      : size === "sm"
      ? "text-sm sm:text-base px-3 py-1.5 rounded-md shadow-sm font-light"
      : "text-base sm:text-lg px-5 py-2.5 rounded-lg shadow-md font-medium";

  return (
    <button
      type={type}
      className={`${customStyle} ${sizeClass} ${variantClass} cursor-pointer transition-all duration-300`}
      onClick={onBtnClick}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
