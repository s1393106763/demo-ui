import React from "react";
import { colors } from "@demo-ui/tokens";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  variant = "primary",
  style,
  ...props
}: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? colors.primary : colors.secondary;

  return (
    <button
      style={{
        backgroundColor,
        color: colors.white,
        padding: "8px 16px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        ...style,
      }}
      {...props}
    />
  );
};

Button.displayName = "Button";
