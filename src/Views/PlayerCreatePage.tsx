/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { useForm } from 'react-hook-form';

type FormData = {
  handle: string;
  role: string;
};

function PlayerCreatePage() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              css={css`
                display: flex;
                margin-bottom: 10px;
              `}
            >
              <PageTitle>Handle: </PageTitle>
              <input
                {...register('handle')}
                type="text"
                placeholder="Johnny Silverhand"
              />
              <PageTitle>Role: </PageTitle>
              <input {...register('role')} type="text" placeholder="Fixer" />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default PlayerCreatePage;
