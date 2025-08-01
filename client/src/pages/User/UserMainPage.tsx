import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const {
    message: toastMessage,
    isVisible: toastMessageisVisible,
    showToastMessage,
    closeToastMessage,
  } = useToastMessage("", false);

  return (
    <>
      <ToastMessage
        message={toastMessage}
        isVisible={toastMessageisVisible}
        onClose={closeToastMessage}
      />
      <AddUserFormModal
        onUserAdded={showToastMessage}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <UserList onAddUser={openModal} />
    </>
  );
};

export default UserMainPage;
