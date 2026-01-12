import React from "react";
import { colors, spacing, radii } from "@pabbii/tokens";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, style, ...props }, ref) => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", gap: spacing.xs }}
      >
        {label && (
          <label style={{ fontSize: "14px", color: colors.secondary }}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          style={{
            padding: `${spacing.sm} ${spacing.md}`,
            borderRadius: radii.md,
            border: `1px solid ${error ? colors.danger : colors.info}`,
            outline: "none",
            fontSize: "16px",
            ...style,
          }}
          {...props}
        />
        {error && (
          <span style={{ fontSize: "12px", color: colors.danger }}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
