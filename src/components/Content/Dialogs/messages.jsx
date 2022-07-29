import React from "react";
import s from "./messages.module.css";

function Messages(props) {
  return (
    <div className={s.messages}>
      <p className={s.me}>Yo</p>
      <p className={s.him}>Sup</p>
      <p className={s.me}>Chillin</p>
      <p className={s.him}>Nice</p>
      <p className={s.me}>Thx</p>
    </div>
  );
}

export default Messages;
