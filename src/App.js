import React, { useEffect, useState } from "react"
import "./App.css"
// import ContactForm from "./components/contactForm/ContactForm"
import ContactsList from "./components/contactsList/ContactsList"
import { 
    fetchContacts,
    addContact as addContactService,
    deleteContact as deleteContactService,
    updateContact as updateContactService,
    fetchContactsByFilter,

    } from "./services/contacts.services"
import { Button,  Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavBar from "./components/navBar/NavBar";


function App() {

  const [isError, setIsError] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [newContacts, setNewContacts] = useState([])


  const [contacts, setContacts] = useState([
    
  ])

  const addContact = async (firstName, lastName, birthday, address, photo) => {
    try{
      setLoading(true)
      const newContact = await addContactService({
        firstName, lastName, birthday, address, photo
      })
      setContacts([...contacts, newContact])
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in addContact")
    }
    
  }
  const deleteContact = async (id) => {

    // setContacts(newContacts)

    try{
      setLoading(true)
      await deleteContactService(id)
      const newContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(newContacts)
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in delete Contact")
    }
  }

  const updateContact = async (id, firstName, lastName, birthday, address, photo) => {
    
    

    try{
      setLoading(true)
      const newContact = await updateContactService(id, {firstName, lastName, birthday, address, photo} )
      const newContacts = contacts.map((contact) => contact.id == id? newContact: contact)
      setContacts(newContacts)
      setLoading(false)

    }catch(e){
      setLoading(false)
      console.log("error in delete Contact")
    }
  }

  useEffect(
    () => {
      let didCancel = false ; 
  async function fetchData(){
    setLoading(true)
    
    if(searchValue.length === 0){
      const conts = await fetchContacts();
      console.log("default data :", conts)
    setContacts(conts)
    setLoading(false)
    
  }else{
    try{
      const result = await fetchContactsByFilter(searchValue)
      if(!didCancel){
        setContacts(result)
      setLoading(false)
      }
      
    }catch(e){
      setLoading(false)
      setIsError(true)
      
    }
  }
}
      fetchData()
      console.log(" with useeffect")
      return () =>{
        console.log("cleanup: ", searchValue)
        didCancel = true
      }
    }, [searchValue]
  )

  return (
    <div className="App">
   <NavBar />
<Container fluid="md">
<br/>
<ContactsList  contacts={contacts}
              deleteContact={deleteContact}
              updateContact={updateContact}
              addContact ={addContact}
              />
  
</Container>
</div>
  );
}

export default App;
