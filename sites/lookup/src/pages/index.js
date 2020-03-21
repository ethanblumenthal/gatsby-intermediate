import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <h1>Rick & Morty Character Lookup</h1>
    <p>Look up favorite characters from Rick & Morty</p>
    <Link to="/search">Search</Link>
  </>
);

export default Index;
