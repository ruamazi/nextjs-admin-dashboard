"use server";
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const createUser = async (formData) => {
  const { username, email, password, address, isAdmin, isActive, img } =
    Object.fromEntries(formData);

  try {
    connectDb();
    const salt = await bcrypt.genSalt(7);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      isAdmin,
      isActive,
      img,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const createProduct = async (formData) => {
  const { title, desc, color, size, price, cat, stock, img } =
    Object.fromEntries(formData);
  try {
    connectDb();
    if (!title || !price) {
      console.log("Please make sure that title or price is not missing.");
      return;
    }
    const newProduct = new Product({
      title,
      desc,
      color,
      size,
      price,
      cat,
      stock,
      img,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/dashboard/products");
};

export const updateUser = async (formData) => {
  connectDb();
  const { id, username, email, address, isAdmin, isActive, img } =
    Object.fromEntries(formData);
  let { password } = Object.fromEntries(formData);
  try {
    if (password) {
      const salt = await bcrypt.genSalt(7);
      const hashedPassword = await bcrypt.hash(password, salt);
      password = hashedPassword;
    }

    const updateFields = {
      username,
      email,
      password,
      address,
      isAdmin,
      isActive,
      img,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update user");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  connectDb();
  const { id, title, desc, color, size, price, cat, stock, img } =
    Object.fromEntries(formData);
  try {
    const updateFields = {
      title,
      desc,
      color,
      size,
      price,
      cat,
      stock,
      img,
    };
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const loginUser = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    // return "Wrong credentials!";
    throw "Wrong credentials!";
  }
};
