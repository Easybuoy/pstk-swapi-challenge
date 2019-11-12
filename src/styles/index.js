import styled from 'styled-components';

const LineLoader = styled.div`
  height: 4px;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  padding: 5rem 0;
  &:before {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 4px;
    background-color: #cc0000;
    animation: loading 2s linear infinite;
  }
  @keyframes loading {
    from {
      left: -200px;
      width: 30%;
    }
    50% {
      width: 30%;
    }
    70% {
      width: 70%;
    }
    80% {
      left: 50%;
    }
    95% {
      left: 120%;
    }
    to {
      left: 100%;
    }
  }
`;

const Select = styled.select`
  margin: 2rem 0;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #f7e523;
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
    linear-gradient(to bottom, #000 0%, #000 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 3em auto, 100%;
  border-color: #f7e523;

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
    box-shadow: black;
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
    text-shadow: -1px -1px 0 #f7e523, 2px -1px 0 #f7e523, -1px 1px 0 #f7e523,
      1px 1px 0 #f7e523;
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
    background-color: #f7e523;
    .toggle {
      cursor: pointer;
    }

    .toggle-gender {
      display: flex;
      justify-content: space-evenly;

      select {
        display: block;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        color: #444;
        line-height: 1.3;
        padding: 0.6em 1.4em 0.5em 0.8em;
        width: 50%;
        box-sizing: border-box;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        border-radius: 0.5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url('https://github.com/Easybuoy/pstk-swapi-challenge/blob/feature/sort-gender-169663235/src/assets/images/dropdown.png?raw=true'),
          linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 0.7em top 50%, 0 0;
        background-size: 3em auto, 100%;
        border-color: #f7e523;

        @media (max-width: 750px) {
          width: 75%;
        }
        &:hover {
          cursor: pointer;
          -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
          transition: all 0.3s ease-in-out;
        }

        &:-ms-expand {
          display: none;
        }

        &:focus {
          box-shadow: black;
          color: #222;
          outline: none;
        }

        option {
          font-weight: bold;
        }
      }
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
    border: 1px solid #f7e523;
    border-bottom: 0.5px solid #f7e523;
    font-size: 12px;
    background-color: black;
    color: #f7e523;
  }

  .fl-table thead th {
    color: #000;
    background: #f7e523;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid #f7e523;
  }

  /* .fl-table thead th:nth-child(odd) {
    color: #f7e523;
    background: #000;
  } */

  /* .fl-table tr:nth-child(even) {
    background: #f8f8f8;
  } */
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
    background-color: #000;
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
          color: #f7e523;
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
  color: #f7e523;
  padding: 2rem;
  font-family: 'Supermercado One', cursive;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #000;

  div {
    padding-left: 1rem;
    img {
      height: 50px;
    }
  }
`;

export {
  LineLoader,
  MovieListDropdown,
  Character,
  CharacterList,
  PreLoader,
  OpeningCrawl,
  MovieDetails,
  Navigation,
  Select
};
