/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import logo from '../../assets/cyberpunk.png';
import { Page } from '../Page';
import { useNavigate } from 'react-router';

//const navigate = useNavigate(); -- It can't be called on the top or inside?

export const HomePage = () => {
  const navigate = useNavigate();

  const handlePlayersClick = () => {
    navigate('Players');
  };

  const handleCreateClick = () => {
    navigate('Create');
  };

  const handlePlayerClick = () => {
    navigate('Player');
  };

  return (
    <Page>
      <div>
        <img
          src={logo}
          alt="Logo"
          css={css`
            margin-left: 100px;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <div>
            <h2>Players</h2>
            <button onClick={handlePlayersClick}>Select a toon</button>
          </div>

          <div>
            <h2>Create New</h2>
            <button onClick={handleCreateClick}>Create new toon</button>
          </div>

          <div>
            <h2>Find a player</h2>
            <button onClick={handlePlayerClick}>Search...</button>
          </div>
        </div>
      </div>
    </Page>
  );
};
