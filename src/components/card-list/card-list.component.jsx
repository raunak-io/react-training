import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
const CardsList = (props) => {
  return (
    <div className="card-list">
      {props.data.map((el) => (
        <Card data={el} key={el.cakeid} />
      ))}
    </div>
  );
};

export default CardsList;
