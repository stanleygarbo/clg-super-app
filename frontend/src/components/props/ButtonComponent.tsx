interface IBtutton {
  label: string | React.ReactNode;
  color?: "red" | "blue" | "green" | "none";
  type?: "button" | "submit" | "reset";
  style?: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  label,
  color = "blue",
  type = "button",
  style,
  onClick,
}: IBtutton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${
        color === "red"
          ? "bg-red-700 hover:bg-red-800"
          : color === "blue"
          ? "bg-blue-700 hover:bg-blue-800"
          : color === "green"
          ? "bg-green-700 hover:bg-green-800"
          : ""
      } ${style} px-2 py-1 font-semibold rounded-lg active:scale-90 duration-200`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
