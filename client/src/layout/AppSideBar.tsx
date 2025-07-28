import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";

const AppSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  const menuItems = [
    {
      icon: "",
      path: "/",
      name: "Gender List",
    },
    {
      icon: "",
      path: "#",
      name: "User List",
    },
  ];

  return (
    <>
      {!isOpen && (
        <div
          className="fixed inset-0 z-30 blur-lg sm:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        } bg-white border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {menuItems.map((menuItem) => (
              <li>
                <Link
                  to={menuItem.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  {menuItem.icon && menuItem.icon}
                  <span className="ms-3">{menuItem.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
