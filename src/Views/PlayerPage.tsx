/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useParams } from 'react-router-dom';
import logo from '../assets/cyberpunk.png';

function PlayerPage() {
  interface PlayerDataType {
    id: number;
    handle: string;
    role: string;
    avatar: string;
    specialAbilities: {
      playerId: number;
      authority: number;
      charismaticLeadership: number;
      combatSense: number;
      credibility: number;
      family: number;
      interface: number;
      juryRig: number;
      medicalTech: number;
      resources: number;
      streedeal: number;
    };
    stats: {
      playerId: number;
      int: number;
      ref: number;
      tech: number;
      cool: number;
      attr: number;
      luck: number;
      ma: number;
      body: number;
      emp: number;
      run: number;
      leap: number;
      lift: number;
    };
  }

  //const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<PlayerDataType>();
  const { id } = useParams();

  //Fetch all forms from database
  useEffect(() => {
    setIsLoading(true);
    fetch('https://localhost:44326/api/Players/' + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setPlayer(data))
      .then(() => setIsLoading(false));
  }, [id]);

  if (isLoading === true && !player) {
    return (
      <Page>
        <PageTitle>Loading...</PageTitle>
      </Page>
    );
  } else {
    return (
      <div
        css={css`
          display: flex;
          margin-top: 50px;
          max-width: 1000px;
          margin-left: 20%;
          margin-right: 10%;
          width: 90%;
          //border: 2px solid black;
        `}
      >
        <div
          css={css`
            display: flex;
            //border: 2px solid red;
            width: 999px;
            flex-direction: row;
          `}
        >
          <img src={logo} alt="Logo" css={css``} />
          <div
            css={css`
              display: flex;
              height: 100px;
              width: 300px;
              flex-direction: column;
              //border: 2px solid green;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                height: 20px;
                margin-bottom: 20px;
              `}
            >
              <h2>Handle: </h2>
              <p
                css={css`
                  margin-top: 25px;
                  margin-left: 10px;
                `}
              >
                {player?.handle}
              </p>
            </div>

            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin-top: 10px;
              `}
            >
              <h2>Role: </h2>
              <p
                css={css`
                  margin-top: 25px;
                  margin-left: 10px;
                `}
              >
                {player?.role}
              </p>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              height: 100px;
              width: 300px;
              flex-direction: column;
              //border: 2px solid orange;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                height: 20px;
                margin-bottom: 20px;
              `}
            >
              <h2>Age: </h2>
              <p
                css={css`
                  margin-top: 25px;
                  margin-left: 10px;
                `}
              >
                69
              </p>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                height: 20px;
                margin-bottom: 20px;
              `}
            >
              <h2>Points: </h2>
              <p
                css={css`
                  margin-top: 25px;
                  margin-left: 10px;
                `}
              >
                420
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerPage;
