import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useParams } from 'react-router-dom';

function PlayerPage() {
  interface PlayerDataType {
    id: number;
    handle: string;
    role: string;
    avatar: string;
    specialAbilities: null;
    stats: null;
  }

  const { id } = useParams();
  //const { id } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [player, setPlayer] = useState<Array<PlayerDataType>>([]);

  //Fetch all forms from database
  useEffect(() => {
    setIsLoading(true);
    fetch('https://localhost:44326/api/Players/1')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setPlayer(data))
      .then(() => setIsLoading(false));
  }, []);

  console.log(id);
  console.log(player);

  if (isLoading === true) {
    return (
      <Page>
        <PageTitle>Loading...</PageTitle>
      </Page>
    );
  } else {
    return (
      <Page>
        <PageTitle>Player Name</PageTitle>
      </Page>
    );
  }
}

export default PlayerPage;
