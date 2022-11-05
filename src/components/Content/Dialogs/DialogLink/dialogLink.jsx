import React from "react";
import s from "./../dialogs.module.css";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

function DialogLinks(props) {
  let navigate = useNavigate();
  let dialogLinks = React.Children.toArray(
    props.dialogData.map((user, index) => (
      <>
        <ListItemButton
          onClick={() => {
            navigate(`/dialog/${user.id}`);
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="avatar" src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.name} />
          </ListItem>
        </ListItemButton>
        {props.dialogData[index + 1] ? <Divider variant="middle" /> : null}
      </>
    ))
  );
  return (
    <>
      <div className={s.dialogs}>
        <List sx={{ width: "100%" }}>{dialogLinks}</List>
      </div>
    </>
  );
}

export default DialogLinks;
