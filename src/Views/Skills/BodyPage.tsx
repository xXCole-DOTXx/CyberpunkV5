import React from 'react';
import styles from './StyleSheets/Body.module.css';

function BodyPage(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Body</h2>
        <p>
          Body:{' '}
          <input
            name="email"
            value={props.getState('email', '')}
            onChange={props.handleChange}
          />
        </p>
        <p>
          Lift:{' '}
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

export default BodyPage;
