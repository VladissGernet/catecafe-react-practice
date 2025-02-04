import React from 'react';
import { useMatch, NavLink } from 'react-router-dom';

const Logo = () => {
  const isIndexPage = useMatch({ path: '/' });

  return isIndexPage
  ? (<span>Logo</span>)
  : (<NavLink to="/">Logo</NavLink>)
};

export { Logo };
