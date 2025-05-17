import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  className,
  ...props
}) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {buttonText}
    </button>
  );
};
