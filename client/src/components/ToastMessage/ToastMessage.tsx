import { useEffect, type FC } from "react";

interface ToastMessageProps {
  message: string;
  // isSuccess: boolean;
  isVisible: boolean;
  onClose: () => void;
}

const ToastMessage: FC<ToastMessageProps> = ({
  message,
  // isSuccess,
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
        className={`fixed top-40 right-0 md:right-4 z-60 flex items-center w-full max-w-xs p-4 mb-4 text-black bg-green-100 rounded-lg shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        role="alert"
      >
        <div
          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-200 rounded-lg transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
      </div>
    </>
  );
};

export default ToastMessage;
