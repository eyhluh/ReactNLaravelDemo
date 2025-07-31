import { useCallback, useState } from "react";

export const useToastMessage = (
  initialMessage: string,
  initialIsVisible: boolean
) => {
  const [message, setMessage] = useState(initialMessage);
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  const showToastMessage = useCallback((msg: string) => {
    setMessage(msg);
    setIsVisible(true);
  }, []);

  const closeToastMessage = useCallback(() => {
    setMessage("");
    setIsVisible(false);
  }, [])

  const toggleToastMessage = useCallback(() => {
    setIsVisible((prev) => !prev)
  }, []);

  return {
    message,
    isVisible,
    showToastMessage,
    closeToastMessage,
    toggleToastMessage,
  };
};
