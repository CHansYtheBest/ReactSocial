import React from "react";

export default function ProfileStatus(props) {
  return <p>{props.status === null ? "Here could be a status..." : props.status}</p>;
}
