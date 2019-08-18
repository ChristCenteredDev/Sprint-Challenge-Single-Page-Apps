import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink exact to='/' style={{ padding: '0 5px' }}>
        Home
      </NavLink>
      <NavLink to='/character' style={{ padding: '0 5px' }}>
        Characters
      </NavLink>
      <NavLink to='/location' style={{ padding: '0 5px' }}>
        Locations
      </NavLink>
      <NavLink to='/episode' style={{ padding: '0 5px' }}>
        Episodes
      </NavLink>
    </nav>
  );
}
