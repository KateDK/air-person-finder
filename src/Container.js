import React, { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json';

const Container = () => {
  const [peopleList] = useState(MOCK_DATA);
  return (
    <div className="Container">
      <h1 className="Container-header">The Person Finder</h1>
      <p className="Container-p">
        If you just can’t find someone and need to know what they look like,
        you’ve come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </p>
      <input
        name="name"
        // value={props.todo.todoText}
        type="text"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type a name..."
      ></input>
      {peopleList.map((person) => (
        <h5>{person.name}</h5>
      ))}
    </div>
  );
};

export default Container;
