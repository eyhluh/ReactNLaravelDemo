import { useModal } from "../../hooks/useModal";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList";

const UserMainPage = () => {
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <>
      <AddUserFormModal isOpen={isOpen} onClose={closeModal} />
      <UserList onAddUser={openModal} />
    </>
  );
};

export default UserMainPage;
