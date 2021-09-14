import React from 'react';
import styles from './StyleSheets/Cool.module.css';

function CoolPage(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Cool</h2>
        <p>Name: {props.state.name}</p>
        <p>Surname: {props.state.surname}</p>
        <p>Email: {props.state.email}</p>
        <p>Phone: {props.state.phone}</p>
        <button onClick={props.prev}>Previous</button>
      </div>
    </div>
  );
}

export default CoolPage;
