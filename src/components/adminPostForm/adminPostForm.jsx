"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { messageNotification } from "@/lib/notification";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  useEffect(() => {
    if (state?.error) {
      messageNotification("error", state?.error);
    } else if (state?.success) {
      messageNotification("success", state?.success);
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" required name="userId" value={userId} />
      <input type="text" required name="title" placeholder="Title" />
      <input type="text" required name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" required name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
    </form>
  );
};

export default AdminPostForm;
