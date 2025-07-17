import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";

const menuItems = [
  {
    label: "Gender List",
    path: "/genders",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Zm6.586 1.414a1 1 0 0 1 0 1.414L15.414 18H17a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v1.586l3.586-3.586a1 1 0 0 1 1.414 0Z" />
      </svg>
    ),
  },

  {
    label: "User List",
    path: "/users",
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0 2c-3.315 0-10 1.66-10 5v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3c0-3.34-6.685-5-10-5Z" />
      </svg>
    ),
  },
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
                  <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {item.icon}
                  </span>
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