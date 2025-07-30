import { useState, type FormEvent, use, type FC } from "react";
import SubmitButton from "../../../components/button/SubmitButton";
import FloatingLabelInput from "../../../components/input/FloatingLabelInput";
import GenderService from "../../../services/GenderService";

interface AddGenderFormProps {
  onGenderAdded: (message: string) => void
}

const AddGenderForm: FC<AddGenderFormProps> = () => {
  const [loadingStore, setLoadingStore] = useState(false)
  const [gender, setGender] = useState("")

  const handleStoreGender =async (e: FormEvent) => {
    try {
      e.preventDefault()

      setLoadingStore(true)

      const res = await GenderService.storeGender(gender)

      if(res.status === 200) {
        setGender('')
        onGenderAdded(res.data.message)
      } else {
        console.error('Unexpected error occured during store gender')
      }
    } catch(error: any) {
      if(error.response && error.response.status === 422) {

      } else {
        
      }

    }

  }
  return (
    <>
    <form>
      <div className="mb-4">
      <FloatingLabelInput label="Gender" type="text" name="gender" />
      </div>
      <div className="flex justify-end">
      <SubmitButton label="Save Gender" className="mt-4" />
      </div>
      </form>
    </>
  );
};

export default AddGenderForm;
