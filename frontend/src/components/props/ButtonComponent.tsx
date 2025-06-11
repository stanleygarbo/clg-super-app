interface IBtutton {
  label: string;
  color?: "red" | "blue" | "green";
  type?: "button" | "submit" | "reset";
  width?: string;
}

const ButtonComponent = ({
  label,
  color = "blue",
  type = "button",
  width = "w-[100%]",
}: IBtutton) => {
  return (
    <button
      type={type}
      className={`${
        color === "red"
          ? "bg-red-700 hover:bg-red-800"
          : color === "blue"
          ? "bg-blue-700 hover:bg-blue-800"
          : "bg-green-700 hover:bg-green-800"
      } ${width} px-3 py-1 font-semibold rounded-lg text-white active:scale-90 duration-200`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
