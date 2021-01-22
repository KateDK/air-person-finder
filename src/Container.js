import React from 'react';

const Container = () => {
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
    </div>
  );
};

export default Container;
