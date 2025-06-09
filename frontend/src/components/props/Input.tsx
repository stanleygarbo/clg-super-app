import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FloatingLabelInputProps {
  label: string;
  readOnly?: boolean;
  value: string | number | undefined;
  register: UseFormRegisterReturn;
  // onChange: (value: string) => void;
  type?: string;
}

const Input = ({
  label,
  value,
  readOnly = true,
  // onChange,
  register,
  type = "text",
}: // ...rest
FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat =
    isFocused || (typeof value === "string" ? (value?.length ?? 0) > 0 : true);

  return (
    <div className="relative bg-white w-full pt-5 rounded-lg">
      <input
        type={type}
        value={value}
        {...register}
        readOnly={readOnly}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full rounded-lg px-3 text-center py-3 focus:outline-none border-b-2 border-b-blue-600"
        placeholder=" " // This is necessary for peer-placeholder-shown
      />
      <label
        className={`absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none
          ${
            shouldFloat
              ? "top-1 left-3 text-blue-800 text-sm"
              : "top-[37px] left-16 -translate-y-1/2 text-base text-gray-500"
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
