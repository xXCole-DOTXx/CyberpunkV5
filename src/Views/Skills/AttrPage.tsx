import React from 'react';
import styles from './StyleSheets/Attr.module.css';

function AttrPage(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Attractiveness</h2>
        <p>
          Email:{' '}
          <input
            name="email"
            value={props.getState('email', '')}
            onChange={props.handleChange}
          />
        </p>
        <p>
          Phone:{' '}
          <input
            name="Phone"
            value={props.getState('phone', '')}
            onChange={props.handleChange}
          />
        </p>
        <button onClick={props.prev}>Previous</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default AttrPage;
