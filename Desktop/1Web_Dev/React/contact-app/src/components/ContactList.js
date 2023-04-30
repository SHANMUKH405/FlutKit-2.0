//functional component
//props pass the data from parent to child
//React is to cause the props and components
//import React from "react";
//props parameter to access to props

import React from "react";
import ContactCard from "./ContactCard";
import { Link, useHistory } from "react-router-dom";

const ContactList = () => {
  const history = useHistory();

  const deleteContactHandler = (id) => {
    // handle delete contact
  };

  const contacts = [
    {
      id: "1",
      name: "Shanmukh",
      email: "shanmukhmagapu@gmail.com",
    },
  ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );

  });

  const addContactHandler = () => {
    history.push("/add");
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">Add Contact</Link>
      </h2>

      <div className="ui celled list">{renderContactList}</div>

      <button className="ui button blue right" onClick={addContactHandler}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactList;
