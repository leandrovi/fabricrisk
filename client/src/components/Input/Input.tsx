import { useRef, useEffect, InputHTMLAttributes, useState } from "react";
import { useField } from "@unform/core";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?:
    | "text"
    | "number"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "password"
    | "time"
    | "range"
    | "search"
    | "tel"
    | "url"
    | "week";
  label?: string;
  value?: string;
  isPassword?: boolean;
}

export function Input({
  name,
  type,
  label,
  value,
  isPassword,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const defaultInputValue = value || defaultValue;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  function handlePasswordToggle() {
    if (inputRef.current?.type === "text") {
      inputRef.current.type = "password";
    } else if (inputRef.current?.type === "password") {
      inputRef.current.type = "text";
    }

    setPasswordVisible(!passwordVisible);
  }

  function PasswordToggle() {
    return (
      <button
        type="button"
        onClick={handlePasswordToggle}
        className={styles.passwordToggle}
      >
        {passwordVisible ? (
          <IoMdEyeOff size={14.4} color="#121214" />
        ) : (
          <IoMdEye size={14.4} color="#121214" />
        )}
      </button>
    );
  }

  return (
    <div className={styles.container}>
      <label htmlFor={fieldName}>{label}</label>

      {isPassword ? (
        <div className={styles.passwordContainer}>
          <input
            type={type || "text"}
            id={fieldName}
            ref={inputRef}
            defaultValue={defaultInputValue}
            className={styles.inputPassword}
            onFocus={clearError}
            {...rest}
          />

          <PasswordToggle />
        </div>
      ) : (
        <input
          type={type || "text"}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultInputValue}
          className={styles.input}
          onFocus={clearError}
          autoCorrect="off"
          autoCapitalize="none"
          style={{
            textTransform: "initial",
          }}
          {...rest}
        />
      )}

      {error && <span>{error}</span>}
    </div>
  );
}
