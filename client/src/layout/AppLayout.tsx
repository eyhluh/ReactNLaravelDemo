import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSideBar";
import { SidebarProvider } from "../contexts/SidebarContext";
import { HeaderProvider } from "../contexts/HeaderContext";

const LayoutContent = () => {
  return (
    <>
      <div>
        <AppSidebar />
      </div>
      <div>
        <AppHeader />
      </div>
      <div className="p-20 -ml-14 sm:ml-52">
        <Outlet />
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderProvider>
        <SidebarProvider>
          <LayoutContent />
        </SidebarProvider>
      </HeaderProvider>
    </>
  );
};

export default AppLayout;
