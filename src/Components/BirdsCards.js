import React from "react";
import IndividualBird from "./IndividualBird";


const BirdsCards = (props) => {
    const {birds, setAdopt, setPrice} = props
    return (
        <ul>
            {birds.map(({name, amount, id, img}) => {
                return (
                <li key={id} className="bird">
                    <IndividualBird setPrice={setPrice} setAdopt={setAdopt} name={name} amount={amount} img={img}/>
                </li>
                )
            })}
        </ul>
    )
}

export default BirdsCards;