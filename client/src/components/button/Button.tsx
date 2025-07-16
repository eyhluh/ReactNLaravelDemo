import type { FC } from "react";

interface ButtonProps {
  type: "button" | "submit";
  label: string;
  newClassName?: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  label,
  newClassName,
  className,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        className={`${
          newClassName
            ? newClassName
            : `bg-green-600 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-green-700 ${className}`
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
