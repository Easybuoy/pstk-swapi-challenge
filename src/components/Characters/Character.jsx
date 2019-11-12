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

export const Character = ({ movie, characters, setCharacters }) => {
  const [heightOrder, setHeightOrder] = useState(undefined);
  const [nameOrder, setNameOrder] = useState(undefined);
  const [genderValue, setGenderValue] = useState('Filter Gender');
  const [stateCharacters, setStateCharacters] = useState([]);

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log('enterring bro')
    if (stateCharacters.length === 0) {
      setStateCharacters(characters);
    }
    // }, 3000);
    // return () => clearTimeout(timer);
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
    console.log('sorted', sorted);
    console.log(stateCharacters, 'statechar');
    // set state
    // reset state
    // setStateCharacters(sorted)
  };

  const onSelectChange = e => {
    const {title} = JSON.parse(e.target.value)
    console.log('titleeee', title)
    setGenderValue(title);
    sortGenderField(stateCharacters, title);
  };

  // let usedCharacter = characters;
  // if (stateCharacters.length > 0) {
  //   usedCharacter = stateCharacters
  // }

  if (characters.length > 0) {
    const totalHeight = calculateHeights(characters);
    const items = [
      { title: 'M' },
      { title: 'F' },
      { title: 'H' },
      { title: 'N/A' }
    ];
    return (
      <StyledCharacter>
        <Select
          defaultValue="Filter Gender"
          value={genderValue}
          onChange={onSelectChange}
          items={items}
        />
        <MovieDetails movie={movie} />

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

  return <PreLoader />;
};

Character.propTypes = {
  characters: PropTypes.array.isRequired,
  setCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  characters: state.swapi.characters
});

export default connect(
  mapStateToProps,
  { setCharacters }
)(Character);
