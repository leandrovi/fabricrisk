import React, { ButtonHTMLAttributes } from "react";
import spinner from "../../assets/images/spinner.gif";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text: string;
}

export function Button({ loading = false, text, ...rest }: ButtonProps) {
  return (
    <button
      type="submit"
      className={styles.button}
      disabled={loading}
      {...rest}
    >
      {loading ? <img src={spinner} alt="Spinner" /> : text}
    </button>
  );
}
