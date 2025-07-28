import type { FC } from "react";
import { Link } from "react-router-dom";

interface BackLinkProps {
  label: string;
  path: string;
  newClassName?: string;
  className?: string;
}

const BackLink: FC<BackLinkProps> = ({
  label,
  path,
  newClassName,
  className,
}) => {
  return (
    <>
      <Link
        to={path}
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-3 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className}`
        }`}
      >
        {label}
      </Link>
    </>
  );
};

export default BackLink;
