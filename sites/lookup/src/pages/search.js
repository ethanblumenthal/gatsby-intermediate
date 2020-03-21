import React from 'react';
import Form from '../components/form';
import Results from '../components/results';

const Search = ({ location }) => {
  const query =
    (location.state && location.state.query) ||
    location.pathname.replace(/^\/search\/?/, '') ||
    '';

  const name = query.replace('/-+/g', ' ');

  return (
    <>
      <h1>
        {name
          ? `Showing results for ${name}`
          : 'Search for Rick & Morty Characters'}
      </h1>
      <p>Search for Pick Rick!</p>
      <Form />
      {name && <Results name={name} />}
    </>
  );
};

export default Search;
