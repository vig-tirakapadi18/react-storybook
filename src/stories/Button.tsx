import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import React, { type ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger" | "success" | "ghost";
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
  iconPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
  loader?: boolean;
  icon?: React.ReactNode
}

const Button = ({
  variant,
  children,
  disabled,
  onClick,
  iconPosition = "left",
  size = "md",
  loader = false,
  icon
}: ButtonProps): React.JSX.Element => {
  let classNames = "";

  switch (variant) {
    case "primary":
      classNames = "bg-blue-500 rounded text-white";
      break;
    case "secondary":
      classNames = "bg-violet-500 rounded text-white";
      break;
    case "danger":
      classNames = "bg-rose-500 rounded text-white";
      break;
    case "success":
      classNames = "bg-green-500 rounded text-white";
      break;
    case "ghost":
      classNames = "bg-gray-50 rounded text-blue-500";
      break;
    default:
      break;
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-4 py-1 text-sm";
      break;
    case "md":
      sizeClasses = "px-6 py-2 text-base";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;

    default:
      break;
  }

  return (
    <button
      className={`${classNames} ${sizeClasses} ${
        disabled ? "bg-stone-400 cursor-not-allowed" : ""
      } flex items-center gap-2`}
      onClick={onClick}
    >
      {iconPosition === "left" && (
        <span>
          <ChevronLeft />
        </span>
      )}
      {loader && (
        <span>
          <Loader className="w-6 h-6 text-pink-500 animate-spin" />
        </span>
      )}
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
      {iconPosition === "right" && (
        <span>
          <ChevronRight />
        </span>
      )}
    </button>
  );
};

export default Button;
