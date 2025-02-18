import React from "react";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  children,
}) => {
  return (
    <Link href="/apply-now">
      <button
        onClick={onClick}
        type={type}
        className={`cursor-pointer px-7 py-3  ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
