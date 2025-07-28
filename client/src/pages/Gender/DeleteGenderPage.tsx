import { useEffect } from "react";
import DeleteGenderForm from "./components/DeleteGenderForm";

const DeleteGenderPages = () => {
  useEffect(() => {
    document.title = "Gender Delete Page";
  }, []);
  return (
    <>
      <DeleteGenderForm />
    </>
  );
};

export default DeleteGenderPages;
