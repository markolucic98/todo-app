import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <NavLink to={link.path} activeClasName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default Navbar;
