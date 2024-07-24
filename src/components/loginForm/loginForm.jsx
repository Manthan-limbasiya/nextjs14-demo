"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useEffect } from "react";
import { messageNotification } from "@/lib/notification";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  useEffect(() => {
    if (state?.error) {
      messageNotification("error", state?.error);
    }
  }, [state]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" required placeholder="username" name="username" />
      <input type="password" required placeholder="password" name="password" />
      <button>Login</button>
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
