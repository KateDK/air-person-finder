import React, { useState } from 'react';
import PersonCard from './PersonCard';
import MOCK_DATA from './MOCK_DATA.json';
import './Container.css';

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
        clasName="Container-input"
        name="name"
        // value={props.todo.todoText}
        type="text"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type a name..."
      ></input>
      {peopleList.map((person) => (
        <PersonCard
          name={person.name}
          avatar={person.avatar}
          description={person.description}
          key={person.id}
        />
      ))}
    </div>
  );
};

export default Container;
