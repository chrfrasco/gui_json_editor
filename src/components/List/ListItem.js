import React from 'react';

const ListItem = ({ handleOpen, person }) => 
  <div className={`list__item ${person.edited ? 'edited' : ''}`}>
    <div>
      {`${person.first} ${person.last} `}
    </div>
    <button className="btn" onClick={() => handleOpen(person)}>edit</button>
  </div>;

export default ListItem;