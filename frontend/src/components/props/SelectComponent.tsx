import { UseFormRegisterReturn } from "react-hook-form";

interface ISelect {
  register: UseFormRegisterReturn;
  options: { value: string; label: string }[];
  disabled?: boolean;
  selected: string;
  label: string;
  onChange?: (value: string) => void;
  value?: string;
}

const SelectComponent = ({
  register,
  options,
  disabled,
  selected,
  label,
  value,
  onChange,
}: ISelect) => {
  return (
    <div className="relative bg-slate-100 w-full pt-[22px] rounded-lg">
      <select
        {...register}
        disabled={disabled}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value);
        }}
        className="peer w-full rounded-lg px-3 bg-inherit text-center py-3 focus:outline-none border-b-2 border-b-blue-600"
      >
        {options?.map((opt) => (
          <option value={opt.value} selected={opt.value === selected}>
            {opt.label}
          </option>
        ))}
      </select>
      <label className="absolute px-1 rounded-lg duration-200 font-semibold pointer-events-none top-1 left-3 text-blue-800 text-sm">
        {label}
      </label>
    </div>
  );
};

export default SelectComponent;
