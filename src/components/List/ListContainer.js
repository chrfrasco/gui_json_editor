import React from 'react';
import ListItem from './ListItem';

const ListContainer = ({ filterText, handleOpen, people }) => (
  <div>
    {people
      .filter(person => {
        return `${person.first} ${person.last}`
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) !== -1;
      })
      .map((person, i) =>
        <ListItem key={i} handleOpen={handleOpen} person={person} />
      )
    }
  </div>
);

export default ListContainer;