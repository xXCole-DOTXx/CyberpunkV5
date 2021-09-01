import React, { useState } from 'react';
import styles from './styles.module.css';

let points = characterRoll();
function StatsPage() {
  const [skillPoints, setPoints] = useState(points); //These are all examples of using hooks.
  const [charInt, setInt] = useState(0);
  const [charRef, setRef] = useState(0);
  const [charTech, setTech] = useState(0);
  const [charCool, setCool] = useState(0);
  const [charAttr, setAttr] = useState(0);
  const [charLuck, setLuck] = useState(0);
  const [charMa, setMa] = useState(0);
  const [charBody, setBody] = useState(0);
  const [charEmp, setEmp] = useState(0);
  const [charRun, setRun] = useState(0);
  const [charLift, setLift] = useState(0);
  const [charLeap, setLeap] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Stats</h2>
        <h3 className={styles.title}>Points: {skillPoints}</h3>
        <div className={styles.columns}>
          <button
            className={styles.buttons}
            onClick={() => {
              if (charInt > 0) {
                setInt(charInt - 1);
                setPoints(skillPoints + 1);
              }
            }}
          >
            -
          </button>
          <h3 className={styles.label}>INT: {charInt}</h3>
          <button
            className={styles.buttons}
            onClick={() => {
              if (skillPoints > 0 && charInt <= 9) {
                setInt(charInt + 1);
                setPoints(skillPoints - 1);
              }
            }}
          >
            +
          </button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>ATTR: {charAttr}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>EMP: {charEmp}</h3>
          <button className={styles.buttons}>+</button>
        </div>
        <div className={styles.columns}>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>REF: {charRef}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>LUCK: {charLuck}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>Run: {charRun}</h3>
          <button className={styles.buttons}>+</button>
        </div>
        <div className={styles.columns}>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>TECH: {charTech}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>MA:: {charMa}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>Leap: {charLeap}</h3>
          <button className={styles.buttons}>+</button>
        </div>
        <div className={styles.columns}>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>COOL: {charCool}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>BODY: {charBody}</h3>
          <button className={styles.buttons}>+</button>
          <button className={styles.buttons}>-</button>
          <h3 className={styles.label}>Lift: {charLift}</h3>
          <button className={styles.buttons}>+</button>
        </div>
      </div>
    </div>
  );
}

function characterRoll() {
  var rolls = [];
  for (var i = 0; i < 9; i++) {
    rolls.push(Math.floor(Math.random() * 10) + 2); //Between 2-10 because if you get a 1 you have to reroll
  }
  var sum = rolls.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

export default StatsPage;
