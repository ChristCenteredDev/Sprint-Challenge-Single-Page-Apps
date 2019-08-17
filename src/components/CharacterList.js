import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        // console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // console.log(data);

  return (
    <section className='character-list grid-view'>
      {data.map(obj => {
        return <CharacterCard key={obj.id} character={obj} />;
      })}
    </section>
  );
}
