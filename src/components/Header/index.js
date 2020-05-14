import React from 'react';

import {
  MdDashboard,
  MdHome,
  MdViewComfy,
  MdSearch,
  MdAdd,
  MdInfoOutline,
  MdNotificationsNone,
} from 'react-icons/md';

import { randomAvatar } from '../../services/api';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav id="left">
        <span>
          <MdViewComfy />
        </span>
        <span>
          <MdHome />
        </span>
        <div>
          <MdDashboard />
          <p>Boards</p>
        </div>

        <input type="text" name="" id="" />
        <MdSearch class="errspan" />
      </nav>
      <h2>icon</h2>
      <nav id="right">
        <span>
          {' '}
          <MdAdd />{' '}
        </span>
        <span>
          <MdInfoOutline />{' '}
        </span>
        <span>
          <MdNotificationsNone />
        </span>
        <img src={randomAvatar()} alt="avatar" />
      </nav>
    </Container>
  );
}

export default Header;
