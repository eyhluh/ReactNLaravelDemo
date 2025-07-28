import type { FC } from "react";

interface SubmitButtonProps {
  label: string;
  newClassName?: string;
  className?: string;
  onClick?: () => void;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  label,
  newClassName,
  className,
  onClick,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-3 bg-green-600 text-white text-sm font-medium p-2 rounded-lg shadow-lg cursor-pointer hover:bg-green-700 ${className}`
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
