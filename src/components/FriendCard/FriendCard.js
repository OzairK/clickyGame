import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card" onClick={()=>props.selectChar(props.id, props.selectedAlready, props.index)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
