import AddGenderForm from "./components/AddGenderForm"
import GenderList from "./components/GenderList";

const GenderMainPage = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <AddGenderForm />
        </div>
        <div className="col-span-1">
          <GenderList />
        </div>
      </div>
    </>
  )
}

export default GenderMainPage;