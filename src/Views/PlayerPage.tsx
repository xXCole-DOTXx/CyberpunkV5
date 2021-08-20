import React, { useState, useEffect } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

function PlayerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [playersData, setPlayersData] = useState([]);

  //Fetch all forms from database
  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:5000/forms')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setPlayersData(data))
      .then(setIsLoading(false));
  }, []);

  return (
    <Page>
      <div style={{ padding: 20 }}>
        <PageTitle>Player Name</PageTitle>
      </div>
    </Page>
  );
}

export default PlayerPage;
