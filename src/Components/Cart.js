import React, { useState } from "react";
import bonusItems from "../data/bonusItems";
import Bonus from "./Bonus";

const Cart = (props) => {
    // destructuring the passed in props from the parent App
  const { adopt, price } = props;

  // setting variables to be used for the calculation of totals and price
    let total = 0;
    let totalSum = 0;
    // mapping through the price array to the add up all the of individual bird that is added to cart
    price.map((pri) => {
        total += pri;
    })

    // Determing the percentage of discount a customer qualifies for per the items in his/her cart
    const discount = () => {
        if (adopt.length >= 3) {
            return 10;
        } else {
            return 0;
        }
    }
    
    // Mathematically applying the said discount to the total cost of items in the cart and also if not met requirement for discount full payment is taken
    if (adopt.length >= 3) {
        totalSum = total * 0.9;
    } else {
        totalSum = total;
    }
    const handleRemove = (e) => {
     
        e.target.parentNode.remove()
        
       
     
    }
    

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <h3>Discount: {discount()}%</h3>
      <h4>Total: ${totalSum}</h4>
      <ol>
        {adopt.map((add) => {
          return (
          <li className="name" >
            {add}
            <button onClick={handleRemove}>Delete</button>
            </li>);
        })}
      </ol>
      <p>Your donations have qualified you for the following items</p>
      <Bonus totalSum={totalSum} />
    </div>
  );
};

export default Cart;
