import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StyledCharacter from './StyledCharacter';
import { formatGender, calculateHeights, calculateFeet, calculateInches } from '../../utils';
import { LineLoader } from '../../styles';

const Character = ({ characters }) => {
  if (characters.length > 0) {
    console.log(characters);
    return (
      <StyledCharacter>
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, i) => {
              return (
                <tr key={character.name}>
                  <td>{character.name}</td>
                  <td>{formatGender(character.gender)}</td>
                  <td>{`${character.height}cm (${calculateFeet}ft/${calculateInches}in)`}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td>{calculateHeights(characters)}</td>
            </tr>
          </tbody>
        </table>
      </StyledCharacter>
    );
  }

  //   return (
  //     <StyledCharacter>
  //       <table className="fl-table">
  //         <thead>
  //           <tr>
  //             <th>Header 1</th>
  //             <th>Header 2</th>
  //             <th>Header 3</th>
  //             <th>Header 4</th>
  //             <th>Header 5</th>
  //           </tr>
  //         </thead>

  //         <tbody>
  //           <tr>
  //             <td>Content 3</td>
  //             <td>Content 3</td>
  //             <td>Content 3</td>
  //             <td>Content 3</td>
  //             <td>Content 3</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </StyledCharacter>
  //   );

  return <LineLoader />;
};

Character.propTypes = {
  loading: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
  characters: state.swapi.characters
});

export default connect(mapStateToProps)(Character);
