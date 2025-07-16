import type { ChangeEvent, FC, ReactNode } from "react";

interface FloatingLabelSelectProps {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectClassName?: string;
  newSelectClassName?: string;
  labelClassName?: string;
  newLabelClassName?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

const FloatingLabelSelect: FC<FloatingLabelSelectProps> = ({
  label,
  name,
  value,
  onChange,
  selectClassName,
  newSelectClassName,
  labelClassName,
  newLabelClassName,
  required,
  autoFocus,
  disabled,
  children,
}) => {
  return (
    <>
      <div className="relative">
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className={`${
            newSelectClassName
              ? newSelectClassName
              : `block px-2.5 pb-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${selectClassName}`
          }`}
          autoFocus={autoFocus}
          disabled={disabled}
          required={required}
        >
          {children}
        </select>
        <label
          htmlFor={name}
          className={`${
            newLabelClassName
              ? newLabelClassName
              : `absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 ${labelClassName}`
          }`}
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      </div>
    </>
  );
};

export default FloatingLabelSelect;
