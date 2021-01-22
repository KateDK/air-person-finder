import React from 'react';

const PersonCard = (props) => {
  return (
    <div className="PersonCard">
      <img src={props.avatar} alt={`${props.name} Avatar`} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PersonCard;
