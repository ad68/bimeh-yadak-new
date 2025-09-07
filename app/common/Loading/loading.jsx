"use client";
import React from "react";
import classNames from "classnames";

const sizeClasses = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading = ({
  type = "spinner",
  variant,
  size = "normal",
  className,
}) => {

  const classes = classNames(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type}
);
  return <span className={classes}></span>;
};
