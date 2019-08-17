import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className='character-list grid-view'>
      {data.map(obj => {
        return <LocationCard key={obj.id} location={obj} />;
      })}
    </section>
  );
}
