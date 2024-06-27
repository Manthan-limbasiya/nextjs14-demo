"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import { useFormState } from "react-dom";
import { addContact } from "@/lib/action";

const ContactPage = () => {
  const [state, formAction] = useFormState(addContact, undefined);
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
            type="text"
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
          {state?.error}
          {state?.success}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
