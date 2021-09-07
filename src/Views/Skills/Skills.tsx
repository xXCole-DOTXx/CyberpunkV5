/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Steps, Step } from 'react-step-builder';
import SpecialAbilities from '../Skills/SpecialAbilities';
import AttrPage from '../Skills/AttrPage';
import CoolPage from '../Skills/CoolPage';
import styles from './StyleSheets/Skills.module.css';

function SkillsPage() {
  return (
    <div className={styles.container}>
      <Steps>
        <Step component={SpecialAbilities} />
        <Step component={AttrPage} />
        <Step component={CoolPage} />
      </Steps>
    </div>
  );
}

export default SkillsPage;
