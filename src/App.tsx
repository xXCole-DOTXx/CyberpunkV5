/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Header } from './header';
import { HomePage } from './Views/Home/HomePage';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerPage from './Views/PlayerPage';
import PlayersPage from './Views/PlayersPage';
import PlayerCreatePage from './Views/Create/PlayerCreatePage';
import NotFoundPage from './Views/NotFoundPage';
import StatsPage from './Views/Stats/Stats';
// import SpecialAbilities from './Views/Skills/SpecialAbilities';
// import AttrPage from './Views/Skills/AttrPage';
// import CoolPage from './Views/Skills/CoolPage';
import SkillsPage from './Views/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="Players" element={<PlayersPage />} />
          <Route path="Player/:id" element={<PlayerPage />} />
          <Route path="Create" element={<PlayerCreatePage />} />
          <Route path="Stats/:userID/:role" element={<StatsPage />} />
          <Route path="Skills/:userID/:role" element={<SkillsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
