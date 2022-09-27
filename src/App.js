import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import { Grid } from "@mui/material";
import { useState, React } from "react";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const handleNewContact = (value) => {
    setContacts([...contacts, value]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2} columns={12}>
        <Grid>
          <ContactForm fnTambahKontak={(value) => handleNewContact(value)} />
        </Grid>
        <Grid>
          {contacts.map((contact) => (
            <Contact data={contact} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
