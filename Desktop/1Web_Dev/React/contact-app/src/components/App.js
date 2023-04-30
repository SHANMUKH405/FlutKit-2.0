import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route,Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import { ReactDOM } from 'react';

//to persist the data we will use local storage
//useEffect is used for local storage
//useEffect help us to render the component again
function App() {
//rendering a list in react
//props pass data from parents to child

//usestate react hook to use the states in functional component
// const LOCAL_STORAGE_KEY = "contacts";
  
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    if (!contact.name || !contact.email) {
      alert('All the fields are mandatory!');
      return;
    }
  
    setContacts(prevContacts => [...prevContacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //use effect to use the local storage

  
  // Retrieve the  data from local storage after refreshing 
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      setContacts(storedContacts);
    }
  }, []);


  useEffect(() => {
    console.log('Storing data in local storage...');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  console.log('Current contacts: ', contacts);


  return (
    <div className="ui container">

        {/* router is used to route the elements */}
        {/* route will have prop make us go the path and the component(here element in 
        new version) will make us to what component we have to load */}

        <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList/>} />
          <Route path="/add" element={<AddContact />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
