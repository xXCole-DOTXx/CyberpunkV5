/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { Dropdown } from 'react-bootstrap';

function PlayerCreatePage() {
  return (
    <Page>
      <div>
        <PageTitle>Create New Player</PageTitle>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            margin: 10px;
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: flex;
              margin-bottom: 10px;
            `}
          >
            <PageTitle>Handle: </PageTitle>
            <input type="text" />
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <PageTitle>Role: </PageTitle>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default PlayerCreatePage;
