import React, { useEffect, useState } from "react"
import ContactsList from "./components/contactsList/ContactsList"
import { 
    fetchContacts,
    addContact as addContactService,
    deleteContact as deleteContactService,
    updateContact as updateContactService,
    fetchContactsByFilter,

    } from "./services/contacts.services"
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Redirect,
      Link
    } from "react-router-dom";
import { Button,  Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavBar from "./components/navBar/NavBar";
import ContactsPage from "./pages/ContactsPage";


function App() {

  return (
    <Router>

        <Switch>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
        </Switch>
    
    </Router>
  );
}

export default App;
