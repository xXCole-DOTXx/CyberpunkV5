import React from 'react';
import styles from './StyleSheets/SpecialAbilityStyles.module.css';

function SpecialAbilities(props: any) {
  const roles = ['Fixer', 'Techie', 'Cop'];
  var item = roles[Math.floor(Math.random() * roles.length)];
  console.log(item);
  if (item == 'Fixer') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <p>
            Streetdeal:{' '}
            <input
              name="streetdeal"
              value={props.getState('name', '')}
              onChange={props.handleChange}
            />
          </p>
          <button onClick={props.next}>Next</button>
        </div>
      </div>
    );
  } else if (item == 'Cop') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <p>
            Authority:{' '}
            <input
              name="authority"
              value={props.getState('name', '')}
              onChange={props.handleChange}
            />
          </p>
          <button onClick={props.next}>Next</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <p>
            Jury Rig:{' '}
            <input
              name="name"
              value={props.getState('name', '')}
              onChange={props.handleChange}
            />
          </p>
          <button onClick={props.next}>Next</button>
        </div>
      </div>
    );
  }
}

export default SpecialAbilities;
