import React, { useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
export default function Contact({ id, firstName, lastName, birthday, photo, address, deleteContact, updateContact }) {
  const [updateMode, setUpdateMode] = useState(false)
  const [firstNameToUpdate, setFirstNameToUpdate] = useState(firstName)
  const [lastNameToUpdate, setLastNameToUpdate] = useState(lastName)
  const [addressToUpdate, setAddressToUpdate] = useState(address)
  const [photoToUpdate, setPhotoToUpdate] = useState(photo)
  const [birthdayToUpdate, setBirthdayToUpdate] = useState(birthday)
  
  const handleUpdateContact = () => {
    updateContact(id, firstNameToUpdate, lastNameToUpdate, birthdayToUpdate, addressToUpdate, photoToUpdate)
    setUpdateMode(false)
  }
console.log("first Name : ", firstName)
  return (
    <div className="contact">
      {!updateMode ? (
       <Card>
       <Card.Img variant="top" src={"./assets/avatar" + id%4 + ".jpg"} />
       <Card.Body>
         <Card.Title>{firstName} {lastName}</Card.Title>
         <Card.Text>
           <b>Nom :</b> {firstName}<br/>
           <b> Prenom: </b> {lastName}<br/>
           <b>Date de Naissance : </b>{birthday}<br/>
           <b>  Addresse :</b> {address}
           
         </Card.Text>
         <Row className="mx-0">
         <Col></Col>
           <Button as={Col} onClick={() => setUpdateMode(true)} variant="primary">Modifier</Button>
           &nbsp;&nbsp;&nbsp;
           <Button as={Col}  onClick={() => deleteContact(id)} variant="danger">Delete</Button>
         </Row>
       </Card.Body>
     </Card>
      ) : (
        <div>
          <input
            type="text"
            name="firstName"
            value={firstNameToUpdate}
            onChange={(e) => setFirstNameToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={lastNameToUpdate}
            name="lastName"
            onChange={(e) => setLastNameToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateContact}>
            Update a contact
          </button>
        </div>
      )}
    </div>
  )
}
