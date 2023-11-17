import Search from "../../components/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../components/dashboard/pagination/Pagination";
import s from "./products.module.css";
import { getAllProducts } from "../../lib/data";
import { deleteProduct } from "../../lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const products = await getAllProducts(q, page);

  return (
    <div className={s.container}>
      <div className={s.top}>
        <Search placeholder={"Search for a product..."} />
        <Link href="/dashboard/products/add">
          <button className={s.addBtn}>Add New</button>
        </Link>
      </div>
      <div className={s.bottom}>
        <table className={s.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className={s.product}>
                    <Image
                      src={product?.img || "/noproduct.jpg"}
                      alt="user image"
                      width={40}
                      height={40}
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>${product.price} </td>
                <td> {product.createdAt?.toString().slice(4, 16)} </td>
                <td> {product.stock} </td>
                <td>
                  <div className={s.actionBtns}>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={` ${s.view}`}>View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" value={product.id} name="id" />
                      <button className={` ${s.delete}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={products.length} />
      </div>
    </div>
  );
};

export default ProductsPage;
