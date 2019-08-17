import React from 'react';

export default function LocationCard(props) {
  return (
    <div className='LocationCard'>
      {props.location.name}
      {props.location.type}
      {props.location.dimension}
      <p>Residents: {props.location.residents.length}</p>
    </div>
  );
}
