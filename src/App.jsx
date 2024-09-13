import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactData from "./contactList.json";
import "./App.css";

const App = () => {
  const [contactList, setContactList] = useState(() => {
    const saveContact = JSON.parse(window.localStorage.getItem("contactList"));
    return saveContact || contactData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contactList", JSON.stringify(contactList));
  });

  const searchContact = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContactList((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const handleDeleteContact = (contactId) => {
    setContactList((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className="mainContainer">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList arr={searchContact} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;
