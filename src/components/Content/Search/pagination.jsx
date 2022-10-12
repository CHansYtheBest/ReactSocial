import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import s from "./search.module.css";

function Pagination(props) {
  let navigate = useNavigate();
  let pagesArr = [];
  for (let i = 0; i <= props.totalPages; i++) {
    pagesArr.push(i);
  }

  let currentPageFirst = props.currentPage - 4;
  let currentPageLast = props.currentPage + 5;
  if (props.currentPage - 4 <= 0) {
    currentPageFirst = 1;
    currentPageLast = props.currentPage + 10 - props.currentPage;
  } else if (props.currentPage + 5 > props.totalPages) {
    currentPageLast = props.totalPages + 1;
    currentPageFirst = props.totalPages - 8;
  }
  let slicedPagesArr = pagesArr.slice(currentPageFirst, currentPageLast);

  let onPageButtonClick = (page) => {
    navigate(page);
  };

  let pagesButtons = React.Children.toArray(
    slicedPagesArr.map((page) => {
      return (
        <NavLink
          to={`/${props.currentPlace}/` + page}
          onClick={() => onPageButtonClick(page)}
          className={() => {
            return s.pagination + " " + (props.currentPage === page ? s.active : "");
          }}
        >
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
      <NavLink to={"/search/" + props.totalPages} onClick={() => onPageButtonClick(props.totalPages)} className={s.pagination}>
        {">|"}
      </NavLink>
    </>
  );
}
export default Pagination;
