import React, { useState, useEffect, Component } from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <li>
            {
              <NavLink exact activeClassName="selected" to="/">
                Listagem
              </NavLink>
            }
          </li>
          <li>
            {
              <NavLink activeClassName="selected" to="/import">
                Importar
              </NavLink>
            }
          </li>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
