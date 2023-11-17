import { createProduct } from "../../../lib/actions";
import s from "./addProductPage.module.css";

const AddProductPage = () => {
  return (
    <div className={s.container}>
      <form action={createProduct} className={s.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="tech">Tech</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="jewellery">Jewellery</option>
        </select>
        <input type="number" placeholder="Price" name="price" min={0} />
        <input type="number" placeholder="Stock" name="stock" min={0} />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea name="desc" cols="30" rows="12" placeholder="Description" />
        <input
          type="text"
          name="img"
          placeholder="Enter URL of product Picture."
        />
        <button className={s.submitBtn}>Sumbit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
