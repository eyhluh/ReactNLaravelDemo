import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "./layout/AppLayout";
// import GenderList from "./pages/GenderList";
// import AddGender from "./pages/AddGender";
// import UserList from "./pages/UserList";
// import AddUser from "./pages/AddUser";
// import "./index.css";
// import App from "./App";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<App />} />
//           <Route path="genders" element={<GenderList />} />
//           <Route path="add-gender" element={<AddGender />} />
//           <Route path="users" element={<UserList />} />
//           <Route path="add-user" element={<AddUser />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
