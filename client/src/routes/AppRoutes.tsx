import { Route , Routes } from "react-router-dom"; 
import AppLayout from "../layout/AppLayout"; 
import GenderMainPage from "../pages/Gender/GenderMainPage";
import EditGenderPage from "../pages/Gender/EditGenderPage";
import DeleteGenderPage from "../pages/Gender/EditGenderPage";
import AddGenderForm from "../pages/Gender/components/AddGenderForm";

const SampleComponent = () => {
    return (
        <>
        <AddGenderForm />
        </>
    )
}
const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route element = {<AppLayout/>}>
                <Route path="/" element={<GenderMainPage />}/>
                <Route path="/gender/edit" element={<EditGenderPage />}/>
                <Route path="/gender/delete" element={<DeleteGenderPage />}/>
            </Route>
        </Routes>
        </>
    )
}

export default AppRoutes