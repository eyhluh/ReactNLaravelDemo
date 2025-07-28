import { useEffect } from "react";
import EditGenderForm from "./components/EditGenderForm";

const EditGenderPage = () => {
  useEffect(() => {
    document.title = "Gender Edit Page";
  }, []);

  return (
    <>
      <EditGenderForm />
    </>
  );
};

export default EditGenderPage;
