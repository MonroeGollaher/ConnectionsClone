import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";

export const Button = ({
  className,
  onClick,
  buttonText,
  type = "button",
  disabled = false,
  form,
}) => {
  return (
    <button
      className={classNames(className, styles.component)}
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
    >
      {buttonText}
    </button>
  );
};
