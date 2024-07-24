"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { messageNotification } from "@/lib/notification";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  useEffect(() => {
    if (state?.error) {
      messageNotification("error", state?.error);
    } else if (state?.success) {
      messageNotification("success", state?.success);
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" required name="username" placeholder="username" />
      <input type="email" required name="email" placeholder="email" />
      <input type="password" required name="password" placeholder="password" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AdminUserForm;
