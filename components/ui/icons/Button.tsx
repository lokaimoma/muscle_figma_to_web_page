import { Children, ReactNode } from "react";

interface ButtonProp {
  outlined?: boolean;
  sizeClass?: String;
  textColor?: String;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({
  outlined = false,
  sizeClass = "p-3",
  textColor = "text-black",
  onClick = () => {},
  children,
}: ButtonProp) => {
  let buttonClass = outlined
    ? `bg-tranparent  ${textColor}`
    : "bg-black text-white";
  return (
    <button
      onClick={onClick}
      className={`${buttonClass} ${sizeClass} border-[3px] border-black rounded font-bold outline-none`}
    >
      {children}
    </button>
  );
};

export default Button;
