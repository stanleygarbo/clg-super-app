interface SelectButtonProps {
  onSelect: () => void;
}

const SelectButton = ({ onSelect }: SelectButtonProps) => {
  return (
    <button
      onClick={onSelect}
      className="bg-white px-4 py-2 w-60 xl:w-40 rounded active:scale-90 duration-200"
    >
      Select 5 Students
    </button>
  );
};

export default SelectButton;
