import Image from "next/image";
import s from "./singleProductPage.module.css";
import { getSingleProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await getSingleProduct(id);

  return (
    <div className={s.container}>
      <div className={s.infoCont}>
        <div className={s.imgCont}>
          <Image
            className={s.img}
            src={`${product?.img ? product.img : "/noproduct.jpg"}`}
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
        {product.title}
      </div>

      <form className={s.form} action={updateProduct}>
        <input type="hidden" name="id" value={product.id} />
        <label htmlFor="title">Product Title</label>
        <input type="text" name="title" placeholder={product.title} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" placeholder={product.price} min={0} />

        <label htmlFor="stock">Stock</label>
        <input type="number" name="stock" placeholder={product.stock} min={0} />

        <label htmlFor="color">Product color</label>
        <input type="text" name="color" placeholder={product.color} />

        <label htmlFor="size">Product size</label>
        <input type="text" name="size" placeholder={product.size} />

        <label htmlFor="cat">Category</label>
        <select name="cat" id="cat">
          <option value="general" selected={product.cat === "general"}>
            Choose Category
          </option>
          <option value="tech" selected={product.cat === "tech"}>
            Tech
          </option>
          <option value="kitchen" selected={product.cat === "kitchen"}>
            Kitchen
          </option>
          <option value="electronics" selected={product.cat === "electronics"}>
            Electronics
          </option>
          <option value="fashion" selected={product.cat === "fashion"}>
            Fashion
          </option>
          <option value="jewellery" selected={product.cat === "jewellery"}>
            Jewellery
          </option>
        </select>

        <label htmlFor="desc">Description</label>
        <textarea type="text" name="desc" placeholder={product.desc} />

        <button>Save</button>
      </form>
    </div>
  );
};

export default SingleProductPage;
