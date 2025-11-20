import type { ButtonProps } from "@/interface";

const sizeMap = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
};

const hoverMap = {
  red: "hover:bg-red-500/75",
  blue: "hover:bg-blue-500/75",
  orange: "hover:bg-orange-500/75",
  green: "hover:bg-green-500/75",
};

const Button = ({
  buttonLabel,
  buttonSize = "md",
  buttonBackgroundColor,
  action,
}: ButtonProps) => {
  const sizeClass = sizeMap[buttonSize] ?? sizeMap.md;
  const bgClass = buttonBackgroundColor
    ? colorMap[buttonBackgroundColor]
    : "bg-slate-500";
  const hoverClass = buttonBackgroundColor
    ? hoverMap[buttonBackgroundColor]
    : "hover:bg-slate-500/75";

  return (
    <button
      onClick={action}
      className={`${bgClass} ${sizeClass} font-semibold rounded-lg ${hoverClass} transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
