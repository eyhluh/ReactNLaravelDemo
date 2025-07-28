import React from "react";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";
import BackButton from "../../../components/button/BackButton";
import SubmitButton from "../../../components/button/SubmitButton";

const DeleteGenderForm = () => {
  return (
    <>
      <form>
        <div className="mb-4">
          <FloatingLabelInput label="Gender" type="text" name="gender" />
        </div>

        <div className="flex justify-end gap-2">
          <BackButton label="Back" path="/" />
          <SubmitButton
            label="Save Gender"
            className="bg-red-600 hover:bg-red-700"
          />
        </div>
      </form>
    </>
  );
};

export default DeleteGenderForm;
