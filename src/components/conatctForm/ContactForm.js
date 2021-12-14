import React, { useState, useEffect } from "react"
import { Button, Modal } from "react-bootstrap"

function ContactForm({ addContact}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [birthday, setBirthday] = useState("")
  const [photo, setPhoto] = useState("")
  const handleAddContact = () => {
      let birthday = "22-10-1986";
      let photo = "avatar2.jpg"

    addContact(firstName, lastName, birthday, address, photo)
    setFirstName(firstName)
    setLastName(lastName)
    setAddress(address)
    setBirthday(birthday);
    setPhoto(photo)
    setShow(false)
  }
 
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect( () => {console.log("first useEffect")})
  return (

        <>
          <Button variant="primary" onClick={handleShow}>
          + Nouveau Contact
                    </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="contact-form">

            <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Nom</label>
    <div class="col-sm-10">
    <input
        type="text" className="form-control" placeholder="FirstName"
        name="title"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
    />
                        </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Prenom</label>
    <div class="col-sm-10">
    <input
        type="text"  className="form-control" placeholder="LastName"
        value={lastName}
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
        />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Adresse</label>
    <div class="col-sm-10">
    <input
        type="text"  className="form-control" placeholder="Taper Adresse"
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
        />
    </div>
  </div>        
                
        
       
      </div>
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleAddContact}>
Enregistrer              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );

}
export default ContactForm

    
  
  
  