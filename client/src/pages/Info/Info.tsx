import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { User } from "../../interfaces";

import styles from "./Info.module.scss";
import spinner from "../../assets/images/spinner.gif";

import { Button } from "../../components/Button/Button";
import { useAppDispatch } from "../../hooks/useStore";
import { signOut } from "../../store/modules/sessions/actions";

export function Info() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser() {
      const { data } = await api.get<User>("/users");
      setUser(data);
    }

    fetchUser();
  }, []);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <div className={styles.container}>
      {user ? (
        <>
          <h1>Welcome {user.username}!</h1>

          <p>The username is: {user.username}</p>
          <p>The current datetime is: {user.datetime}</p>
          <p>The API application path is: {user.dirname}</p>

          <Button text="LOGOUT" onClick={handleLogout} />
        </>
      ) : (
        <img src={spinner} alt="Spinner" />
      )}
    </div>
  );
}
