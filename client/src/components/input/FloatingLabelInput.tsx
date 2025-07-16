import type { ChangeEvent, FC } from "react";

interface FloatingLabelInputProps {
  label: string;
  type: "text" | "date" | "password";
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

const FloatingLabelInput: FC<FloatingLabelInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  autoFocus,
  disabled,
  readOnly,
}) => {
  return (
    <>
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={required}
          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
        />
        <label
          htmlFor={name}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      </div>
    </>
  );
};

export default FloatingLabelInput;
