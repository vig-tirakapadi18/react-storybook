import React, { type ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger" | "success" | "ghost";
  children: ReactNode;
}

const Button = ({ variant, children }: ButtonProps): React.JSX.Element => {
    let classNames = "";

    switch (variant) {
      case "primary":
        classNames = "bg-blue-500 px-4 py-1 rounded text-white";
        break;
      case "secondary":
        classNames = "bg-violet-500 px-4 py-1 rounded text-white";
        break;
      case "danger":
        classNames = "bg-rose-500 px-4 py-1 rounded text-white";
        break;
      case "success":
        classNames = "bg-green-500 px-4 py-1 rounded text-white";
        break;
      case "ghost":
        classNames = "bg-gray-50 px-4 py-1 rounded text-blue-500";
        break;
      default:
        break;
    }

  return <button className={classNames}>{children}</button>;
};

export default Button;
