/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { Card } from 'react-bootstrap';
import { css } from '@emotion/react';
import pic from '../assets/samurai.png';
import { useNavigate } from 'react-router-dom';

function PlayersPage() {
  interface PlayersDataType {
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playersData, setPlayersData] = useState<Array<PlayersDataType>>([]);
  const navigate = useNavigate();

  const createNew = () => {
    navigate('../Create');
  };

  const handleSelect = (id: number) => {
    navigate('/Players', {
      state: {
        userId: id,
      },
    });
  };

  //Fetch all players from database
  useEffect(() => {
    setIsLoading(true);
    fetch('https://localhost:44326/api/Players/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setPlayersData(data))
      .then(() => setIsLoading(false));
  }, []);

  if (isLoading === true) {
    return (
      <Page>
        <PageTitle>Loading...</PageTitle>
      </Page>
    );
  } else {
    return (
      <Page>
        <div>
          <PageTitle>Toons</PageTitle>
          <div
            css={css`
              justify-content: center;
              margin-left: 255px;
              margin-bottom: 10px;
            `}
          >
            <button onClick={createNew}>Create New</button>
          </div>
        </div>

        <div //Every card is listed in 1 column
          css={css`
            flex-direction: column;
            margin-left: 40px;
          `}
        >
          {playersData.map((data) => (
            <div key={data.id}>
              <Card
                css={css`
                  display: flex;
                  width: 500px;
                  height: 200px;
                  flex-direction: column;
                  //border: 2px solid black;
                  box-shadow: 0 3px 7px 0 rgba(30, 38, 46, 0.21);
                  cursor: pointer;
                  :hover {
                    transform: scale(
                      1.2
                    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                  }
                `}
                onClick={() => handleSelect(data.id)}
              >
                <div
                  css={css`
                    display: flex;
                    flex-direction: row;
                    //border: 2px solid orange;
                  `}
                >
                  <Card.Img
                    src={pic}
                    alt="No photo found."
                    css={css`
                      margin: 5px 10px 10px 10px;
                      width: 150px;
                      height: 150px;
                      border-radius: 50%;
                      box-shadow: 0 3px 7px 0 rgba(30, 38, 46, 0.21);
                      //border: 2px solid black;
                    `}
                  />
                  <Card.Body
                    css={css`
                      flex: 1;
                      flex-direction: row;
                      //border: 2px solid purple;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        flex-direction: row;
                        //justify-content: space-between;
                        flex-wrap: wrap;
                      `}
                    >
                      <Card.Text>Int:</Card.Text>
                      <Card.Text>{data.stats.int}</Card.Text>
                      <Card.Text>Ref:</Card.Text>
                      <Card.Text>{data.stats.ref}</Card.Text>
                      <Card.Text>Tech:</Card.Text>
                      <Card.Text>{data.stats.tech}</Card.Text>
                      <Card.Text>Cool:</Card.Text>
                      <Card.Text>{data.stats.cool}</Card.Text>
                      <Card.Text>Attr:</Card.Text>
                      <Card.Text>{data.stats.attr}</Card.Text>
                      <Card.Text>Luck:</Card.Text>
                      <Card.Text>{data.stats.luck}</Card.Text>
                      <Card.Text>Ma:</Card.Text>
                      <Card.Text>{data.stats.ma}</Card.Text>
                      <Card.Text>Body:</Card.Text>
                      <Card.Text>{data.stats.body}</Card.Text>
                      <Card.Text>Emp:</Card.Text>
                      <Card.Text>{data.stats.emp}</Card.Text>
                      <Card.Text>Run:</Card.Text>
                      <Card.Text>{data.stats.run}</Card.Text>
                      <Card.Text>Leap:</Card.Text>
                      <Card.Text>{data.stats.leap}</Card.Text>
                      <Card.Text>Lift:</Card.Text>
                      <Card.Text>{data.stats.lift}</Card.Text>
                    </div>
                  </Card.Body>
                </div>
                <Card.Title
                  css={css`
                    display: flex;
                    width: 150px;
                    flex-direction: row;
                    justify-content: center;
                    font-weight: bold;
                    margin-bottom: 10px;
                  `}
                >
                  {data.handle}, {data.role}
                </Card.Title>
              </Card>
              <br></br>
            </div>
          ))}
        </div>
      </Page>
    );
  }
}

export default PlayersPage;
