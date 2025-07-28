import SubmitButton from "../../../components/button/SubmitButton";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";

const AddGenderForm = () => {
  return (
    <>
      <FloatingLabelInput label="Gender" type="text" name="gender" />
      <SubmitButton label="Save Gender" className="mt-4" />
    </>
  );
};

export default AddGenderForm;
