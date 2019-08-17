import React from 'react';

export default function CharacterCard(props) {
  return (
    <div className='charactercard'>
      <img src={props.character.image} alt={props.character.name} />
      <h2>Name: {props.character.name}</h2>
    </div>
  );
}
