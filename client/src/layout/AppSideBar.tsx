import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Gender List", path: "/genders" },
  { label: "Add Gender", path: "/add-gender" },
  { label: "User List", path: "/users" },
  { label: "Add User", path: "/add-user" },
];

const AppSidebar = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-400 opacity-50 sm:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                  <span className="ms-3">{item.label}</span>
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
