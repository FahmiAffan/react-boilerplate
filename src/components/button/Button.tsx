import React from "react";

export const Button = ({
  label,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white p-2 rounded ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};
