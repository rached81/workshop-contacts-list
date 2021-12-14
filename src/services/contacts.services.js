let contacts = [
    {
      id: "1",
      firstName: "Sadeg",
      lastName: "Ali",
      birthday: "16-04-1982",
      address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
      photo: "avatar1.jpg"

    },
    {
      id: "2",
      firstName: "Mansour",
      lastName: "Adalet",
      birthday: "16-04-1982",
      address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
      photo: "avatar2.jpg"
    },
    {
      id: "3",
      firstName: "Foulen",
      lastName: "Foulani",
      birthday: "16-04-1982",
      address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
      photo: "avatar3.jpg"
    },
    {
        id: "4",
        firstName: "Sadeg",
        lastName: "Ali",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar1.jpg"
  
      },
      {
        id: "5",
        firstName: "Mansour",
        lastName: "Adalet",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar2.jpg"
      },
      {
        id: "6",
        firstName: "Foulen",
        lastName: "Foulani",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar3.jpg"
      },
      {
        id: "7",
        firstName: "Sadeg",
        lastName: "Ali",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar1.jpg"
  
      },
      {
        id: "8",
        firstName: "Mansour",
        lastName: "Adalet",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar2.jpg"
      },
      {
        id: "9",
        firstName: "Foulen",
        lastName: "Foulani",
        birthday: "16-04-1982",
        address:"05 rue Narjes Cité Nozhat Soltan - Borj Cedria - Hammam Chatt - Ben Arous",
        photo: "avatar3.jpg"
      },
  ]
  
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  
  export const fetchContacts = async () => {
    await delay(1000)
    return contacts
  }
  export const fetchContactsByFilter = async (searchValue) => {
    await delay(3000)
    return contacts.filter((contact) => contact.firstName.includes(searchValue))
  }
  
  export const fetchContactById = async (id) => {
    await delay(1000)
    const contact = contacts.find((contact) => contact.id === id)
    return contact
  }
  
  export const addContact = async (contact) => {
    await delay(1000)
    const newContact = {
      id: contacts.length + 1,
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      photo: contact.photo,
      birthday: contact.birthday,
    }
  
    contacts = contacts.concat(newContact)
    return newContact
  }
  
  export const deleteContact = async (id) => {
    await delay(1000)
    contacts = contacts.filter((contact) => contact.id !== id)
  }
  
  export const updateContact = async (id, contact) => {
    await delay(1000)
    const updatedContact = { id, title: contact.title, duration: contact.duration }
    contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    return updatedContact
  }

  