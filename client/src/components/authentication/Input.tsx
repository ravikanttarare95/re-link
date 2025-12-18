import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  customStyle?: string;

  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  checked?: boolean;
  min?: number | string;
  max?: number | string;
}

const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  onInputChange,
  value,
  customStyle,
  checked,
  min,
  max,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = type === "password" && isPasswordVisible ? "text" : type; //--IMPORTANT--//
  return (
    <div className="relative">
      <input
        tabIndex={0}
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${customStyle} w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition`}
        onChange={onInputChange}
        checked={checked}
        min={min}
        max={max}
      />
      {type === "password" && (
        <div
          className="absolute right-0 top-1/2 -translate-1/2 cursor-pointer w-fit opacity-50 hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}
        >
          {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
        </div>
      )}
    </div>
  );
};

export default Input;
