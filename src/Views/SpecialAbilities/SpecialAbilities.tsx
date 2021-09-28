import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

function SpecialAbilities(props: any) {
  let { userID, role } = useParams();
  const navigate = useNavigate();
  const [careerPoints, setCareerPoints] = useState(40);
  const [authority, setAuthority] = useState(0);
  const [charismaticLeadership, setCharismaticLeadership] = useState(0);
  const [combatSense, setCombatSense] = useState(0);
  const [credibility, setCredibility] = useState(0);
  const [family, setFamily] = useState(0);
  const [_interface, setInterface] = useState(0);
  const [juryRig, setJuryRig] = useState(0);
  const [medTech, setMedTech] = useState(0);
  const [resources, setResources] = useState(0);
  const [streetdeal, setStreetdeal] = useState(0);

  const onSubmit = () => {
    console.log('did it.');
    navigate(`/Skills/${userID}`);
  };

  if (role === 'Cop') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Authority: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (authority > 0) {
                    setAuthority(authority - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{authority}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && authority <= 9) {
                    setAuthority(authority + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Rockerboy') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Charismatic Leadership: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (charismaticLeadership > 0) {
                    setCharismaticLeadership(charismaticLeadership - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{charismaticLeadership}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && charismaticLeadership <= 9) {
                    setCharismaticLeadership(charismaticLeadership + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Solo') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Combat Sense: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (combatSense > 0) {
                    setCombatSense(combatSense - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{combatSense}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && combatSense <= 9) {
                    setCombatSense(combatSense + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Netrunner') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Interface: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (_interface > 0) {
                    setInterface(_interface - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{_interface}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && _interface <= 9) {
                    setInterface(_interface + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Media') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Credibility: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (credibility > 0) {
                    setCredibility(credibility - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{credibility}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && credibility <= 9) {
                    setCredibility(credibility + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Nomad') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Family: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (family > 0) {
                    setFamily(family - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{family}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && family <= 9) {
                    setFamily(family + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Corporate') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Resources: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (resources > 0) {
                    setResources(resources - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{resources}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && resources <= 9) {
                    setResources(resources + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Fixer') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Streetdeal: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (streetdeal > 0) {
                    setStreetdeal(streetdeal - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{streetdeal}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && streetdeal <= 9) {
                    setStreetdeal(streetdeal + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'Techie') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Jury Rig: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (juryRig > 0) {
                    setJuryRig(juryRig - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{juryRig}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && juryRig <= 9) {
                    setJuryRig(juryRig + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  } else if (role === 'MedTech') {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <h2 className={styles.title}>Special Ability</h2>
          <h2 className={styles.title}>Career Points: {careerPoints}</h2>
          <div className={styles.columns}>
            <div className={styles.columnContainers}>
              <h3 className={styles.label}>Med Tech: </h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (medTech > 0) {
                    setMedTech(medTech - 1);
                    setCareerPoints(careerPoints + 1);
                  }
                }}
              >
                -
              </button>
              <h3 className={styles.label}>{medTech}</h3>
              <button
                className={styles.buttons}
                onClick={() => {
                  if (careerPoints > 0 && medTech <= 9) {
                    setMedTech(medTech + 1);
                    setCareerPoints(careerPoints - 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
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
          <div className={styles.title}>
            <input type="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default SpecialAbilities;
