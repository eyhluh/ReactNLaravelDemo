import { useEffect } from "react";
import EditGenderForm from "./components/EditGenderForm";
import { useToastMessage } from "../../hooks/useToastMessage";
import ToastMessage from "../../components/ToastMessage/ToastMessage";

const EditGenderPage = () => {
  useEffect(() => {
    document.title = "Gender Edit Page";
  }, []);

  const {
    message: toastMessage,
    isVisible: toastMessageIsVisible,
    showToastMessage,
    closeToastMessage,
  } = useToastMessage("", false);

  return (
    <>
      <ToastMessage
        message={toastMessage}
        isVisible={toastMessageIsVisible}
        onClose={closeToastMessage}
      />
      <EditGenderForm onGenderUpdated={showToastMessage} />
    </>
  );
};

export default EditGenderPage;
