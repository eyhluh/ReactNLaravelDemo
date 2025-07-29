import { use, useEffect, type FC } from "react";

interface ToastMessageProps {
  message?: string;
  isSuccess?: boolean;
  isVisible?: boolean;
  onClose?: () => void;
}

const ToastMessage: FC<ToastMessageProps> = ({
  message,
  isSuccess,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <>
      <div
        className={`fixed top-40 right-0 md:right-4 z-60 flex items-center w-full max-w-xs p-4 mb-4 text-black bg-green-100 rounded-lag shadow-lg transition-opacity
        duratiom-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-greeen-200 rounded-lg transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-10"
          }`}
        ></div>
      </div>
    </>
  );
};

export default ToastMessage;
