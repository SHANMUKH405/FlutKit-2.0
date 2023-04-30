import React from "react";
//add image in react

import user from "../images/user.png"

const ContactCard = (props) => {
  // destructuring
  const { id, name, email } = props.contact;

  return (
    <div className="Item">

    <img className="ui avatar image" src={user} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i 
        className="trash alternate outline icon "
        style={{ color: "red", marginTop: "7px" }}
        onClick={()=>props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
