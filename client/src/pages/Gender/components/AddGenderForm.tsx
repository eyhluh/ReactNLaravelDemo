import { useState, type FormEvent, type FC } from "react";
import SubmitButton from "../../../components/button/SubmitButton";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";
import GenderService from "../../../services/GenderService";
import type { GenderFieldErrors } from "../../../Interfaces/GenderInterfaces";

interface AddGenderFormProps {
  onGenderAdded: (message: string) => void;
  refreshKey: () => void;
}

const AddGenderForm: FC<AddGenderFormProps> = ({
  onGenderAdded,
  refreshKey,
}) => {
  const [loadingStore, setLoadingStore] = useState(false);
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState<GenderFieldErrors>({});

  const handleStoreGender = async (e: FormEvent) => {
    try {
      e.preventDefault();

      setLoadingStore(true);

      const res = await GenderService.storeGender({ gender });

      if (res.status === 200) {
        setGender("");
        setErrors({});

        onGenderAdded(res.data.message);
        refreshKey();
      } else {
        console.error(
          "Unexpected error occurred during store gender: ",
          res.data
        );
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        console.error(
          "Unexpected server error occurred during store gender: ",
          error
        );
      }
    } finally {
      setLoadingStore(false);
    }
  };

  return (
    <>
      <form onSubmit={handleStoreGender}>
        <div className="mb-4">
          <FloatingLabelInput
            label="Gender"
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            autoFocus
            errors={errors.gender}
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton
            label="Save Gender"
            loading={loadingStore}
            loadingLabel="Saving Gender..."
          />
        </div>
      </form>
    </>
  );
};

export default AddGenderForm;
