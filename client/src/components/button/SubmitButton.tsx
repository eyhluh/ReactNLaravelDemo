import type { FC } from "react";
import Spinner from "../Spinner/Spinner";

interface SubmitButtonProps {
  label: string;
  newClassName?: string;
  className?: string;
  loading?: boolean;
  loadingLabel?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  label,
  newClassName,
  className,
  loading,
  loadingLabel,
}) => {
  return (
    <>
      <button
        type="submit"
        className={`${
          newClassName
            ? newClassName
            : `px-4 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium cursor-pointer rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`
        }`}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="flex gap-1">
              <div>{<Spinner size="xs" />}</div>
              {loadingLabel}
            </div>
          </>
        ) : (
          label
        )}
      </button>
    </>
  );
};

export default SubmitButton;
