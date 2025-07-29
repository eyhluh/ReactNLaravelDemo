import type { FC } from "react";

interface CloseButtonProps {
  label: string;
  onClose: () => void;
  newClassName?: string;
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = ({
  label,
  onClose,
  newClassName,
  className,
}) => {
  return (
    <>
      <button
        type="button"
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-3 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm cursor-pointer rounded-lg shadow-lg ${className}`
        }`}
        onClick={onClose}
      >
        {label}
      </button>
    </>
  );
};

export default CloseButton;
