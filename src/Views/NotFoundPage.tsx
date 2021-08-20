import React from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

function NotFoundPage() {
  return (
    <Page>
      <div style={{ padding: 20 }}>
        <PageTitle>Page Not Found</PageTitle>
      </div>
    </Page>
  );
}

export default NotFoundPage;
