import type { FC } from "react";

interface CloseButtonProps {
  label: string;
  onClose: () => void;
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = ({ label, onClose, className }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      className={`px-4 py-3 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm font-medium cursor-pointer rounded-lg shadow-lg ${
        className ?? ""
      }`}
    >
      {label}
    </button>
  );
};

// interface CloseButtonProps {
//   label: string;
//   path: string;
//   newClassName?: string;
//   className?: string;
// }

// const CloseButton: FC<CloseButtonProps> = ({
//   label,
//   path,
//   newClassName,
//   className,
// }) => {
//   return (
//     <>
//       <Link
//         to={path}
//         className={`${
//           newClassName
//             ? newClassName
//             : `px-4 py-3 bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className}`
//         }`}
//       >
//         {label}
//       </Link>
//     </>
//   );
// };

export default CloseButton;
