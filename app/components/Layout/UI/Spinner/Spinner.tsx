"use client";

import React from "react";
import { SpinnerContainer, SpinnerProps } from "./Spinner.styled";

export default function LoadingSpinner({
  size,
  color,
  spinColor,
}: SpinnerProps) {
  return (
    <SpinnerContainer
      size={size}
      color={color}
      spinColor={spinColor}
      data-testid="loading-spinner"
    />
  );
}
