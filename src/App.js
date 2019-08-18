import React from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <AppRouter />
    </main>
  );
}
