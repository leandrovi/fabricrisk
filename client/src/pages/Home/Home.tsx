import React, { useRef, FormEvent } from "react";
import { SubmitHandler, FormHandles, FormHelpers } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import styles from "./Home.module.scss";
import Logo from "../../assets/svg/Logo";
import { Input } from "../../components/Input/Input";

import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { signInRequest } from "../../store/modules/sessions/actions";
import { User } from "../../interfaces";
import { Button } from "../../components/Button/Button";

export function Home() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.sessions.loading);
  const error = useAppSelector((state) => state.sessions.error);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(
    data: SubmitHandler<FormData>,
    _: FormHelpers,
    event?: FormEvent<Element> | undefined
  ) {
    event?.preventDefault();

    try {
      const schema = Yup.object().shape({
        username: Yup.string().required("Please type in your username"),
        password: Yup.string().required("Please type in your password"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data as unknown as User));
    } catch (err) {
      const validationErrors: { [path: string]: string } = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path as string] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Logo />

      <Form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <Input
          name="username"
          type="text"
          placeholder="Your username goes here"
        />

        <Input
          name="password"
          type="password"
          placeholder="Your password goes hete"
          isPassword={true}
        />

        {error && <span className={styles.error}>{error}</span>}

        <Button loading={loading} text="LOGIN" />
      </Form>
    </div>
  );
}
