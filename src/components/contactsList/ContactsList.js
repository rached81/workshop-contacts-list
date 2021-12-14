import React from "react"
import {  Col, Row } from "react-bootstrap"
import ContactForm from "../conatctForm/ContactForm"
import Contact from "./../contact/Contact"

export default function ConatctsList({ contacts, deleteContact, updateContact,addContact }) {
    console.log("contacts in list Contact", contacts)
  return (
      <>
    <Row md={10}>
    <Col md={{ span: 6, offset: 10 }}>
    
        <ContactForm addContact = {addContact}/>
        
        </Col>

      </Row>
      <br/>
    <Row xs={1} md={4} className="g-4">
 
          {contacts.map((contact) => (
            <Col>
            <Contact
              key={contact.id}
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              birthday={contact.birthday}
              address={contact.address}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
            </Col>
          ))}
  </Row>
  </>
  )
}