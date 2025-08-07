import { useCallback, useState } from "react";

export const useToastMessage = (
  initialMessage: string,
  initialIsFailed: boolean = false,
  initialIsVisible: boolean
) => {
  const [message, setMessage] = useState(initialMessage);
  const [isFailed, setIsFailed] = useState(initialIsFailed);
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  const showToastMessage = useCallback((msg: string, failed:boolean = false) => {
    setMessage(msg);
    setIsFailed(failed);
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
    isFailed,
    isVisible,
    showToastMessage,
    closeToastMessage,
    toggleToastMessage,
  };
};
