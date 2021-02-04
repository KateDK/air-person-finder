import React, { useState } from 'react';
import PersonCard from './PersonCard';
import MOCK_DATA from './MOCK_DATA.json';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Container.css';

const Container = () => {
  const [peopleList] = useState(MOCK_DATA);
  const [value, setValue] = useState('');
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    peopleList.slice(count.prev, count.next)
  );

  const getMoreData = () => {
    if (current.length === peopleList.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(peopleList.slice(count.prev + 10, count.next + 10))
      );
    }, 20);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

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
      <form>
        <label htmlFor="namedInput">Name:</label>
        <input
          id="namedInput"
          className="Container-input"
          name="name"
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a name..."
        />
        <button className="input-submit" type="submit">
          submit
        </button>
      </form>
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <ul className="people-list">
          {peopleList
            .filter((person) => filterLogic(person))
            .map((person) => (
              <li key={person.id}>
                <PersonCard
                  name={person.name}
                  avatar={person.avatar}
                  description={person.description}
                />
              </li>
            ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Container;
