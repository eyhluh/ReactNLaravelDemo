import type { FC, ReactNode } from "react";
import CompanyLogo1 from "../../assets/img/CompanyLogo1.png";

interface AuthPageLayoutProps {
  children: ReactNode;
}
const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-row">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white">
          <div className="w-full mx-w-md p-8 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <img
                className="h-16 mb-2"
                src={CompanyLogo1}
                alt="Company Logo"
              />
              <h2 className="text-2xl font-bold text-gray-200">
                Sign in to your Account
              </h2>
            </div>
            {children}
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 h-screen items-center justify-centerbg-white">
          <img
            className="object-contain w-full h-full"
            src={CompanyLogo1}
            alt="Company Logo"
          />
        </div>
      </div>
    </>
  );
};

export default AuthPageLayout;
