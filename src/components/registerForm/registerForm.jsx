"use client";

import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { messageNotification } from "@/lib/notification";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  useEffect(() => {
    if (state?.error) {
      messageNotification("error", state?.error);
    }
  }, [state]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" required placeholder="username" name="username" />
      <input type="email" required placeholder="email" name="email" />
      <input type="password" required placeholder="password" name="password" />
      <input
        required
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
