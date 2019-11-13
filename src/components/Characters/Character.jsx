import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MovieDetails from '../Common/MovieDetails';
import { setCharacters } from '../../actions';
import Select from '../Common/Select';
import { Character as StyledCharacter } from '../../styles';
import {
  formatGender,
  calculateHeights,
  formatHeight,
  sortHeight,
  sortName,
  calculateFeet,
  calculateInches,
  sortGender
} from '../../utils';
import PreLoader from '../Common/PreLoader';

export const sortArrow = order => {
  switch (order) {
    case 0:
      return <span>&darr;</span>;
    case 1:
      return <span>&uarr;</span>;
    default:
      return '';
  }
};

export const Character = ({ movie, characters, setCharacters, loading }) => {
  const [heightOrder, setHeightOrder] = useState(undefined);
  const [nameOrder, setNameOrder] = useState(undefined);
  const [genderValue, setGenderValue] = useState('Filter Gender');
  const [stateCharacters, setStateCharacters] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    if (stateCharacters.length === 0 || movie.title !== movieTitle) {
      setStateCharacters(characters);
      setMovieTitle(movie.title);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters]);

  const sortNameField = array => {
    let sorted = [];
    if (nameOrder === 0 || nameOrder === undefined) {
      sorted = sortName(array, 'asc');
      setNameOrder(1);
    }

    if (nameOrder === 1) {
      sorted = sortName(array, 'dsc');
      setNameOrder(0);
    }
    setCharacters([]);
    setCharacters(sorted);
  };

  const sortHeightField = array => {
    let sorted = [];
    if (heightOrder === 0 || heightOrder === undefined) {
      sorted = sortHeight(array, 'asc');
      setHeightOrder(1);
    }

    if (heightOrder === 1) {
      sorted = sortHeight(array, 'dsc');
      setHeightOrder(0);
    }
    setCharacters([]);
    setCharacters(sorted);
  };

  const sortGenderField = (array, letter) => {
    const sorted = sortGender(array, letter);
    setCharacters(sorted);
  };

  const onSelectChange = e => {
    const { title } = JSON.parse(e.target.value);

    setGenderValue(e.target.value);
    sortGenderField(stateCharacters, title);
  };

  const items = [
    { title: 'M' },
    { title: 'F' },
    { title: 'H' },
    { title: 'N/A' }
  ];

  if (loading) {
    return <PreLoader />;
  }

  if (characters.length === 0) {
    return (
      <StyledCharacter>
        <Select
          defaultValue="Filter Gender"
          value={genderValue}
          onChange={onSelectChange}
          items={items}
        />

        <h2>No character to display with search criteria</h2>
      </StyledCharacter>
    );
  }
  if (characters.length > 0) {
    const totalHeight = calculateHeights(characters);

    return (
      <StyledCharacter>
        <MovieDetails movie={movie} />

        <Select
          defaultValue="Filter Gender"
          value={genderValue}
          onChange={onSelectChange}
          items={items}
        />
        
        <table className="fl-table">
          <thead>
            <tr>
              <th
                onClick={() => sortNameField(characters)}
                className="toggle name"
              >
                Name {sortArrow(nameOrder)}
              </th>
              <th>Gender</th>
              <th
                onClick={() => sortHeightField(characters)}
                className="toggle height"
              >
                Height {sortArrow(heightOrder)}
              </th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, i) => {
              return (
                <tr key={character.name}>
                  <td>{character.name}</td>
                  <td>{formatGender(character.gender)}</td>
                  <td>{formatHeight(character.height)}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td className="total">{`Total: ${totalHeight}cm (${calculateFeet(
                totalHeight
              )}ft/${calculateInches(totalHeight)}in)`}</td>
            </tr>
          </tbody>
        </table>
      </StyledCharacter>
    );
  }
};

Character.propTypes = {
  characters: PropTypes.array.isRequired,
  setCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading.loading,
  error: state.error,
  characters: state.swapi.characters
});

export default connect(
  mapStateToProps,
  { setCharacters }
)(Character);
