"use client";

import { ReactNode } from "react";
import { css } from "../../../styled-system/css/css";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={css({
        bg: "var(--static-color-static-blue-800)",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "red.400" },
      })}
    >
      {children}
    </button>
  );
}
