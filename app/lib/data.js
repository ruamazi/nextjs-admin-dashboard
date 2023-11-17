import { Product, User } from "./models";
import { connectDb } from "./utils";

const ITEM_PER_PAGE = 3;

export const getAllUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectDb();
    // const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectDb();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUser = async (id) => {
  connectDb();
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("Cannot find the user");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSingleProduct = async (id) => {
  connectDb();
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Cannot find the product");
    }
    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
