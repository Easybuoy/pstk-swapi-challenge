import React from 'react';
import MovieListDropdown from './components/Common/MovieListDropdown';
import CharacterList from './components/Characters/CharacterList';

const App = () => {
  return (
    <div>
      <MovieListDropdown />
      <CharacterList />
    </div>
  );
};

export default App;
