import React from "react";
import { NavLink } from "react-router-dom";
import useGetUsers from "../../../customHooks/useGetUsers";
import s from "./search.module.css";

function Pagination(props) {
  let totalPages = Math.ceil(props.totalItems / props.count);
  let pagesArr = [];
  for (let i = 0; i <= totalPages; i++) {
    pagesArr.push(i);
  }

  let currentPageFirst = props.currentPage - 4;
  let currentPageLast = props.currentPage + 5;
  if (props.currentPage - 4 <= 0) {
    currentPageFirst = 1;
    currentPageLast = props.currentPage + 10 - props.currentPage;
  } else if (props.currentPage + 5 > totalPages) {
    currentPageLast = totalPages + 1;
    currentPageFirst = totalPages - 8;
  }
  console.log(currentPageFirst, currentPageLast);
  let slicedPagesArr = pagesArr.slice(currentPageFirst, currentPageLast);

  let onPageButtonClick = (page) => {
    useGetUsers(props.count, page).then((data) => {
      props.setUsers(data.items);
    });
    props.setCurrentPage(page);
  };

  let pagesButtons = React.Children.toArray(
    slicedPagesArr.map((page) => {
      return (
        <NavLink to={"/search/" + page} onClick={() => onPageButtonClick(page)} className={s.pagination}>
          {page}
        </NavLink>
      );
    })
  );

  return (
    <>
      <NavLink to={"/search/" + 1} onClick={() => onPageButtonClick(1)} className={s.pagination}>
        {"|<"}
      </NavLink>
      {pagesButtons}
      <NavLink to={"/search/" + totalPages} onClick={() => onPageButtonClick(totalPages)} className={s.pagination}>
        {">|"}
      </NavLink>
    </>
  );
}
export default Pagination;
