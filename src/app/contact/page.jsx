"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import { useFormState } from "react-dom";
import { addContact } from "@/lib/action";
import { useEffect } from "react";
import { messageNotification } from "@/lib/notification";

const ContactPage = () => {
  const [state, formAction] = useFormState(addContact, undefined);

  useEffect(() => {
    if (state?.error) {
      messageNotification("error", state?.error);
    } else if (state?.success) {
      messageNotification("success", state?.success);
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action={formAction} className={styles.form}>
          <input
            type="text"
            required
            name="name"
            placeholder="Name and Surname"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
