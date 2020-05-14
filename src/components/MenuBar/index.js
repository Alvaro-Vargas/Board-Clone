import React from 'react';

import { MdStarBorder, MdMoreHoriz } from 'react-icons/md';

import { randomAvatar } from '../../services/api';

import { Container } from './styles';

const MenuBar = () => {
  return (
    <Container>
      <strong>Board Title</strong>
      <div>
        <nav id="left">
          <ul>
            <li className="star">
              <MdStarBorder />
            </li>
            <span className="button-divider" />
            <li>
              <span>Team</span>
            </li>
            <span className="button-divider" />
            <li>
              <span>Team Visibility</span>
            </li>
            <span className="button-divider" />
            <img src={randomAvatar()} alt="avatar" />
            <li>
              <span>Invite</span>
            </li>
          </ul>
        </nav>
        <nav id="right">
          <span>
            <MdMoreHoriz />
            Show Menu
          </span>
        </nav>
      </div>
    </Container>
  );
};

export default MenuBar;
