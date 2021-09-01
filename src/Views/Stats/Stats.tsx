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
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2 className={styles.title}>Stats</h2>
        <h3 className={styles.title}>Points: {skillPoints}</h3>
        <div className={styles.columns}>
          <div className={styles.columnContainers}>
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
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charAttr > 0) {
                  setAttr(charAttr - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>ATTR: {charAttr}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charAttr <= 9) {
                  setAttr(charAttr + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charEmp > 0) {
                  setEmp(charEmp - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>EMP: {charEmp}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charEmp <= 9) {
                  setEmp(charEmp + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charRef > 0) {
                  setRef(charRef - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>REF: {charRef}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charRef <= 9) {
                  setRef(charRef + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charLuck > 0) {
                  setLuck(charLuck - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>LUCK: {charLuck}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charLuck <= 9) {
                  setLuck(charLuck + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charCool > 0) {
                  setCool(charCool - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>Cool: {charCool}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charCool <= 9) {
                  setCool(charCool + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charTech > 0) {
                  setTech(charTech - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>TECH: {charTech}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charTech <= 9) {
                  setTech(charTech + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charMa > 0) {
                  setMa(charMa - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>MA: {charMa}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charMa <= 9) {
                  setMa(charMa + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
          <div className={styles.columnContainers}>
            <button
              className={styles.buttons}
              onClick={() => {
                if (charBody > 0) {
                  setBody(charBody - 1);
                  setPoints(skillPoints + 1);
                }
              }}
            >
              -
            </button>
            <h3 className={styles.label}>Body: {charBody}</h3>
            <button
              className={styles.buttons}
              onClick={() => {
                if (skillPoints > 0 && charBody <= 9) {
                  setBody(charBody + 1);
                  setPoints(skillPoints - 1);
                }
              }}
            >
              +
            </button>
          </div>
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
