import { useEffect, useState, type FC, type FormEvent } from "react";
import Modal from "../../../components/Modal";
import type { UserColumns } from "../../../Interfaces/UserInterfaces";
import CloseButton from "../../../components/button/CloseButton";
import SubmitButton from "../../../components/button/SubmitButton";
import UserService from "../../../services/UserService";

interface DeleteUserFormModalProps {
  user: UserColumns | null;
  onUserDeleted: (message: string) => void;
  refreshKey: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteUserFormModal: FC<DeleteUserFormModalProps> = ({
  user,
  onUserDeleted,
  refreshKey,
  isOpen,
  onClose,
}) => {
  const [loadingDestroy, setLoadingDestroy] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffixName, setSuffixName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");

  const handleDestroyUser = async (e: FormEvent) => {
    try {
      e.preventDefault();

      setLoadingDestroy(true);

      const res = await UserService.destroyUser(user?.user_id!);

      if (res.status === 200) {
        onUserDeleted(res.data.message);
        refreshKey();
        onClose();
      } else {
        console.error(
          "Unexpected status occured during deleting user: ",
          res.status
        );
      }
    } catch (error) {
      console.error(
        "Unexpected server error occured during deleting user: ",
        error
      );
    } finally {
      setLoadingDestroy(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (user) {
        setFirstName(user.first_name);
        setMiddleName(user.middle_name ?? "");
        setLastName(user.last_name);
        setSuffixName(user.suffix_name ?? "");
        setGender(user.gender.gender);
        setBirthDate(user.birth_date);
        setUsername(user.username);
      } else {
        console.error(
          "Unexpected user error occured during getting user details: ",
          user
        );
      }
    }
  }, [isOpen, user]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
        <form onSubmit={handleDestroyUser}>
          <h1 className="text-2xl border-b border-gray-100 p-4 font-semibold mb-4">
            Delete User Form
          </h1>
          <div className="grid grid-cols-2 gap-4 border-b border-gray-100 mb-4">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <label
                  htmlFor="first_name"
                  className="text-black font-medium mb-2 "
                >
                  First Name
                </label>
                <p className="text-gray-500 font-medium">{firstName}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="middle_name"
                  className="text-black font-medium mb-2 "
                >
                  Middle Name
                </label>
                <p className="text-gray-500 font-medium">
                  {middleName || "N/A"}
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="text-black font-medium mb-2 "
                >
                  Last Name
                </label>
                <p className="text-gray-500 font-medium">{lastName}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="suffix_name"
                  className="text-black font-medium mb-2 "
                >
                  Suffix Name
                </label>
                <p className="text-gray-500 font-medium">
                  {suffixName || "N/A"}
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="text-black font-medium mb-2 "
                >
                  Gender
                </label>
                <p className="text-gray-500 font-medium">{gender}</p>
              </div>
            </div>
            <div className="cols-span-2 md:col-span-1">
              <div className="mb-4">
                <label
                  htmlFor="birth_date"
                  className="text-black font-medium mb-2 "
                >
                  Birth Date
                </label>
                <p className="text-gray-500 font-medium">{birthDate}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-black font-medium mb-2 "
                >
                  Username
                </label>
                <p className="text-gray-500 font-medium">{username}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            {!loadingDestroy && <CloseButton label="Close" onClose={onClose} />}
            <SubmitButton
              className="bg-red-600 hover:bg-red-700"
              label="Delete User"
              loading={loadingDestroy}
              loadingLabel="Deleting User..."
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default DeleteUserFormModal;
