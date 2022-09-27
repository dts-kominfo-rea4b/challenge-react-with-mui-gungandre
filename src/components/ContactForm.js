// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { React, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
const ContactForm = ({ fnTambahKontak }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const initialState = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };

  const [newContact, setNewContact] = useState(initialState);
  const handleChange = (name, value) => {
    setNewContact({ ...newContact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fnTambahKontak(newContact);
    setNewContact(initialState);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 400,
          backgroundColor: "rgb(227 213 173 / 28%)",
          margin: "5em",
        }}
      >
        <form action="" onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              type="text"
              fullWidth
              label="Name"
              variant="filled"
              name="nama"
              value={newContact.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            <TextField
              type="text"
              fullWidth
              label="Phone"
              variant="filled"
              margin="normal"
              name="phone"
              value={newContact.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />
            <TextField
              type="text"
              fullWidth
              label="Email"
              variant="filled"
              margin="normal"
              name="email"
              value={newContact.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
            <TextField
              type="text"
              fullWidth
              label="Photo URL"
              variant="filled"
              margin="normal"
              name="photo"
              value={newContact.photo}
              onChange={(e) => handleChange("photo", e.target.value)}
              required
            />
          </CardContent>
          <CardActions>
            <Button variant="text" type="submit" color="success">
              ADD NEW
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
