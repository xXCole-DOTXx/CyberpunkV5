/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './StyleSheets/SpecialAbilityStyles.module.css';

function SpecialAbilities(props: any) {
  return (
    <div className={styles.container}>
      <p>
        Name:{' '}
        <input
          name="name"
          value={props.getState('name', '')}
          onChange={props.handleChange}
        />
      </p>
      <p>
        Surname:{' '}
        <input
          name="surname"
          value={props.getState('surname', '')}
          onChange={props.handleChange}
        />
      </p>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default SpecialAbilities;
