import React from "react";
import { useState } from "react";
import Cart from "./Cart";

// const firstName = document.querySelector("#FirstName");

const Checkout = (props) => {
  const { setAdopt, setPrice } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !zipCode) {
      alert("Please complete form");
    } else {
      alert("You have adopted birds. Thank you!");

      setAdopt([]);
      setPrice([]);
      setEmail("");
      setFirstName("");
      setLastName("");
      setZipCode("");

      event.target.reset();
    }
  };
  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <label>
          First Name
          <br />
          <input 
          id="FirstName" 
          name="FirstName" 
          type="text" 
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}/>
        </label>
        {/* {console.log(firstName.value)} */}
        <label>
          Last Name
          <br />
          <input 
          id="LastName" 
          name="LastName" 
          type="text" 
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}/>
        </label>
        <label>
          Email
          <br />
          <input 
          id="Email" 
          name="Email" 
          type="email" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <label>
          Zip Code
          <br />
          <input 
          id="ZipCode" 
          name="ZipCode" 
          type="number" 
          value={zipCode} 
          onChange={(event) => setZipCode(event.target.value)}/>
        </label>
        <input label="Submit" type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
