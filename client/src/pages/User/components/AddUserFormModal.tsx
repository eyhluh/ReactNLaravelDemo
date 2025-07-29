import type { FC } from "react";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";
import Modal from "../../../components/Modal";
import FloatingLabelSelect from "../../../components/select/FloatingLabelSelect";
import SubmitButton from "../../../components/button/SubmitButton";
import CloseButton from "../../../components/button/CloseButton";

interface AddUserFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserFormModal: FC<AddUserFormModalProps> = ({ isOpen, onClose }) => {
  const genders = [
    {
      gender_id: "",
      gender: "Select Gender",
    },
    {
      gender_id: 1,
      gender: "Male",
    },
    {
      gender_id: 2,
      gender: "Female",
    },
    {
      gender_id: 3,
      gender: "Prefer not to say",
    },
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
        <form>
          <h1 className="text-2xl border-b border-gray-100 p-4 font-semibold mb-4">
            Add User Form
          </h1>
          <div className="grid grid-cols-2 gap-4 border-b border-gray-100 mb-4">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <FloatingLabelInput
                  label="First Name"
                  name="first_name"
                  type="text"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Middle Name"
                  name="middle_name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Last Name"
                  name="last_name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Suffix Name"
                  name="suffix_name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <FloatingLabelSelect label="Gender" name="gender">
                  {genders.map((gender, index) => (
                    <option value={gender.gender_id} key={index}>
                      {gender.gender}
                    </option>
                  ))}
                </FloatingLabelSelect>
              </div>
            </div>
            <div className="cols-span-2 md:col-span-1">
              <div className="mb-4">
                <FloatingLabelInput
                  label="Birth hdate"
                  name="birth_date"
                  type="date"
                  required
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Username"
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              <div className="mb-4">
                <FloatingLabelInput
                  label="Password Confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <CloseButton label="Close" onClose={onClose} />
            <SubmitButton label="Save User" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddUserFormModal;
