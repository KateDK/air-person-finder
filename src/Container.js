import React, { useState } from 'react';
import PersonCard from './PersonCard';
import MOCK_DATA from './MOCK_DATA.json';
import './Container.css';

const Container = () => {
  const [peopleList] = useState(MOCK_DATA);
  const [value, setValue] = useState('');

  const filterLogic = (person) => {
    const lowercaseName = person.name.toLowerCase();
    const lowerCaseVal = value.toLocaleLowerCase();
    return lowercaseName.includes(lowerCaseVal);
  };
  return (
    <div className="Container">
      <h1 className="Container-header">The Person Finder</h1>
      <p className="Container-p">
        If you just can’t find someone and need to know what they look like,
        you’ve come to the right place! Just type the name of the person you are
        looking for below into the search box!
      </p>
      <label htmlFor="namedInput">Name:</label>
      <input
        id="namedInput"
        className="Container-input"
        name="name"
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a name..."
      ></input>

      {peopleList
        .filter((person) => filterLogic(person))
        .map((person) => (
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
