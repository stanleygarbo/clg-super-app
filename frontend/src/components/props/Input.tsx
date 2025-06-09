import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FloatingLabelInputProps {
  label: string;
  readOnly?: boolean;
  value?: string | number | undefined;
  register?: UseFormRegisterReturn;
  onChange?: (value: string) => void;
  onInput?: any;
  type?: string;
  required?: boolean;
}

const Input = ({
  label,
  value,
  readOnly,
  onChange,
  onInput,
  register,
  type = "text",
  required = false,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat =
    isFocused || (typeof value === "string" ? (value?.length ?? 0) > 0 : true);

  return (
    <div className="relative w-full pt-5 rounded-lg bg-slate-100">
      <input
        type={type}
        value={value}
        required={required}
        {...register}
        readOnly={readOnly}
        onInput={onInput}
        onChange={(e) => {
          register?.onChange?.(e);
          onChange?.(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full rounded-lg px-3 bg-inherit text-center py-3 focus:outline-none border-b-2 border-b-blue-600"
        placeholder=" " // This is necessary for peer-placeholder-shown
      />
      <label
        className={`absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none
          ${
            shouldFloat
              ? "top-1 left-3 text-blue-800 text-sm"
              : "top-[37px] left-3 -translate-y-1/2 text-base text-gray-500"
          }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
