// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

// Contact berisi foto, nama, telepon, dan email

const Contact = ({ data }) => {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 400,
          minWidth: 300,
          backgroundColor: "rgb(206 234 227 / 75%)",
          margin: "5em",
        }}
      >
        <ListItem>
          <ListItemAvatar sx={{ paddingRight: "2em" }}>
            <Avatar src={data.photo} sx={{ width: 56, height: 56 }} />
          </ListItemAvatar>
          <ListItemText>
            <Typography> {data.name} </Typography>
            <Typography> {data.phone} </Typography>
            <Typography> {data.email} </Typography>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </>
  );
};

export default Contact;
