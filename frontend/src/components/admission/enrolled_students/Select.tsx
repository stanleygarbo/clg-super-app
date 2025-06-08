import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FloatingLabelSelectProps {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  register?: UseFormRegisterReturn;
}

const Select = ({
  label,
  value,
  onChange,
  options,
  register,
}: FloatingLabelSelectProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const shouldFloat = isFocused || (value?.length ?? 0) > 0;

  return (
    <div className="relative w-full pt-5 rounded-lg bg-white">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full rounded-lg px-3 text-center py-3 focus:outline-none border-b-2 border-b-blue-600"
        {...register}
      >
        <option value="" disabled hidden></option>
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-3 text-sm text-gray-500 transition-all pointer-events-none px-1
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

export default Select;
