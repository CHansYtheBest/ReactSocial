import React from "react";
import s from "./preloader.module.css";

export default function Preloader(props) {
  return (
    <>
      <div className={s.preloaderContainer}>
        <div className={s.preloader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
