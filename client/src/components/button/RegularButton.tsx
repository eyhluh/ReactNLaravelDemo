import type { FC } from "react";

interface RegularButtonProps {
  label: string;
  newClassName?: string;
  className?: string;
  onClick?: () => void;
}

const RegularButton: FC<RegularButtonProps> = ({
  label,
  newClassName,
  className,
  onClick,
}) => {
  return (
    <>
      <button
        type="button"
        className={`${
          newClassName
            ? newClassName
            : `bg-white text-gray-600 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 ${className}`
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default RegularButton;
