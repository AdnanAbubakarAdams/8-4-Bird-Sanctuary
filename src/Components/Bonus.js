import bonusItems from "../data/bonusItems";
import React, { useState } from "react";
const Bonus = (props) => {
  const { totalSum } = props;
  if (totalSum > 1000) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </ul>
    );
  }
  if (totalSum >= 500) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </ul>
    );
  }

  if (totalSum >= 300) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </ul>
    );
  }

  if (totalSum >= 100) {
    return (
      <ul>
        <li>{bonusItems[0]}</li>
      </ul>
    );
  } else {
    return <ul></ul>;
  }
};

export default Bonus;
