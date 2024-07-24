"use server";

import { revalidatePath } from "next/cache";
import { Contact, Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);

  if (img) {
    const isValidUrl = (url) => {
      return url.startsWith("https://images.pexels.com");
    };
    if (!isValidUrl(img)) {
      return {
        error: "Image url must be from pexels.com",
      };
    }
  }

  try {
    connectToDb();
    const newPost = new Post({
      title: title.trim(),
      desc: desc.trim(),
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: "Post added successfully" };
  } catch (err) {
    console.log(err);
    if (err.errorResponse.code === 11000) {
      return { error: "slug already exists" };
    }
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: "Post deleted successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, isAdmin } = Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
    return { success: "User added successfully" };
  } catch (err) {
    console.log(err.errorResponse.code);
    if (err.errorResponse.code === 11000) {
      return { error: "User already exists" };
    }
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
    return { success: "User deleted successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const addContact = async (prevState, formData) => {
  const { name, email, phoneNumber, desc } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newContact = new Contact({
      name,
      email,
      phoneNumber,
      desc,
    });

    await newContact.save();
    console.log("saved to db");
    return { success: "Contact added successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
