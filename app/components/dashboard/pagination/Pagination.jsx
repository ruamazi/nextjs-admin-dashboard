"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import s from "./pagination.module.css";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 3;

  // const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  // const hasNext =
  //   ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < parseInt(count);

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);

    replace(`${pathName}?${params}`);
  };

  return (
    <div className={s.container}>
      <button
        className={s.btn}
        disabled={parseInt(page) <= 1}
        onClick={() => handleChangePage("prev")}
      >
        <MdOutlineNavigateBefore size={18} />
      </button>
      <button
        className={s.btn}
        disabled={count < ITEM_PER_PAGE}
        onClick={() => handleChangePage("next")}
      >
        <MdNavigateNext size={18} />
      </button>
    </div>
  );
};

export default Pagination;
