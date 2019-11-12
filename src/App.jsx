import React from 'react';
import MovieListDropdown from './components/Common/MovieListDropdown';
import CharacterList from './components/Characters/CharacterList';
import Navigation from './components/Common/Navigation';

const App = () => {
  if (!localStorage.getItem('movieData')) {
    localStorage.setItem('movieData', JSON.stringify([]));
  }
  return (
    <>
      <Navigation />
      <MovieListDropdown />
      <CharacterList />
    </>
  );
};

export default App;
