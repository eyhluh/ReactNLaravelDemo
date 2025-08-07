import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHeader } from "../contexts/HeaderContext";
import { useSidebar } from "../contexts/SidebarContext";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const { isOpen, toggleUserMenu } = useHeader();
  const { toggleSidebar } = useSidebar();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [isloading, setIsLoading] = useState(false);

  const handleLogout = async (e: FormEvent) => {
    try {
      e.preventDefault();

      setIsLoading(true);

      await logout();
    } catch (error) {
      console.error(
        "Unexpected server error occured during logging user out: ",
        error
      );
    } finally {
      navigate("/"); // put here
      setIsLoading(false);
    }
  };

  const handleUserFullNameFormat = () => {
    if (!user) return "";

    let fullName = `${user.user.last_name}, ${user.user.first_name}`;

    if (user.user.middle_name) {
      fullName += `${user.user.middle_name.charAt(0)}.`;
    }

    if (user.user.suffix_name) {
      fullName += `${user.user.suffix_name}`;
    }

    return fullName;
  };

  useEffect(() => {
    if (user) {
      handleUserFullNameFormat();
    }
  }, [user]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={toggleUserMenu}></div>
      )}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="https://github.com/eyhluh/ReactNLaravelDemo.git"
                className="flex ms-2 md:me-24"
              >
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  Demo
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    onClick={toggleUserMenu}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        EV
                      </span>
                    </div>
                  </button>
                </div>
                <div
                  className={`absolute right-8 top-9 min-w-[200px] border border-gray-200 z-50 ${
                    isOpen ? "block" : "hidden"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg"
                  id="dropdown-user`}
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900" role="none">
                      {handleUserFullNameFormat()}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <button
                        type="submit"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100 w-full text-start cursor-pointer disabled:cursor-not-allowed"
                        role="menuitem"
                        onClick={handleLogout}
                        disabled={isloading}
                      >
                        {isloading ? "Signing Out..." : "Sign Out"}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
