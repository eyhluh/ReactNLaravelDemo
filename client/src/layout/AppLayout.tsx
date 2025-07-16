import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSideBar";
import { SidebarProvider } from "../context/SidebarContext";

const LayoutContent = () => {
  return (
    <>
      <div className="min-h-screen xl:flex">
        <div>
          <AppSidebar />
        </div>
        <div>
          <AppHeader />
          <div className="pt-16 md:pt-12 pl-0 sm:pl-64 transition-all">
            <div className="p-4 mx-auto max-w-7xl md:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <LayoutContent />
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
