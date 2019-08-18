import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodesList';
import WelcomePage from './WelcomePage';

export default function AppRouter() {
  return (
    <div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/character' component={CharacterList} />
      <Route path='/location' component={LocationsList} />
      <Route path='/episode' component={EpisodesList} />
    </div>
  );
}
