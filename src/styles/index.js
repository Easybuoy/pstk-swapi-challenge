import styled from 'styled-components';
import { primaryColor, secondaryColor } from './colors';

const Select = styled.select`
  margin: 2rem 0;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: ${primaryColor};
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 20%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('https://github.com/Easybuoy/pstk-swapi-challenge/blob/bug/fix-application-colors-169703366/src/assets/images/dropdown.png?raw=true'),
    linear-gradient(to bottom, ${secondaryColor} 0%, ${secondaryColor} 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 3em auto, 100%;
  border-color: ${primaryColor};

  @media (max-width: 1100px) {
    width: 30%;
  }

  @media (max-width: 820px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 65%;
  }

  @media (max-width: 375px) {
    width: 85%;
  }
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 3px 0px yellow;
    -moz-box-shadow: 0px 0px 3px 0px yellow;
    box-shadow: 0px 0px 3px 0px yellow;
    transition: all 0.3s ease-in-out;
  }

  &:-ms-expand {
    display: none;
  }

  &:focus {
    box-shadow: ${secondaryColor};
    color: yellow;
    outline: none;
  }

  option {
    font-weight: bold;
  }
`;

const MovieListDropdown = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    font-family: 'Supermercado One', cursive;
    font-size: 3rem;
    text-shadow: -1px -1px 0 ${primaryColor}, 2px -1px 0 ${primaryColor},
      -1px 1px 0 ${primaryColor}, 1px 1px 0 ${primaryColor};
  }
`;

const CharacterList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 800px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 650px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 550px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 430px) {
    img {
      display: none;
    }
  }
`;

const Character = styled.div`
  margin: 10px 70px 70px;
  font-family: 'Open Sans', sans-serif;
  width: 100%;

  @media (max-width: 750px) {
    margin: 0;
  }
  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: ${primaryColor};
    .toggle {
      cursor: pointer;
    }

   

    .total {
      font-weight: bold;
    }
  }

  .fl-table td,
  .fl-table th {
    text-align: center;
    padding: 8px;
  }

  .fl-table td {
    border: 1px solid ${primaryColor};
    border-bottom: 0.5px solid ${primaryColor};
    font-size: 12px;
    background-color: ${secondaryColor};
    color: ${primaryColor};
  }

  .fl-table thead th {
    color: ${secondaryColor};
    background: ${primaryColor};
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid ${primaryColor};
  }
`;

const PreLoader = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  .content {
    background-color: ${secondaryColor};
    height: 300px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 820px) {
      height: auto;
    }

    .content-details {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-evenly;
      padding: 2rem;
      @media (max-width: 820px) {
        padding: 0;
      }
      .item {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        text-align: center;
        h4 {
          color: ${primaryColor};
          font-family: 'Supermercado One', cursive;
        }

        p {
          color: #ffffff;
          font-family: 'Open Sans', sans-serif;
          padding: 0;
        }
      }
    }
  }
`;
const OpeningCrawl = styled.div`
  display: flex;
  color: ${primaryColor};
  padding: 2rem;
  font-family: 'Supermercado One', cursive;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${secondaryColor};
  border-bottom: 1px solid ${primaryColor};

  div {
    padding-left: 1rem;
    img {
      height: 50px;
    }
  }
`;

export {
  MovieListDropdown,
  Character,
  CharacterList,
  PreLoader,
  OpeningCrawl,
  MovieDetails,
  Navigation,
  Select
};
