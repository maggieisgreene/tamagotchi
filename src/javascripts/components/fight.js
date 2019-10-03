import utilities from '../helpers/utilities';

let strength = 100;

const runningAway = () => {
  document.getElementById('runAwayButton').addEventListener('click', () => {
    const addingStrength = strength + 1;
    if (addingStrength > 100) {
      strength = 100;
    } else {
      strength = addingStrength;
    }
    document.getElementById('fightProgress').value = strength;
  });
};

const committingViolence = () => {
  document.getElementById('commitViolenceButton').addEventListener('click', () => {
    strength -= 10;
    document.getElementById('fightProgress').value = strength;
  });
};

const fightActionBuilder = () => {
  let domString = `<progress id="fightProgress" max="100" value="${strength}"></progress>`;
  domString += '<h1 id="fightHeader">FIGHT</h1>';
  domString += '<button id="runAwayButton">Run Away</button> <button id="commitViolenceButton">Commit Violence</button>';
  utilities.printToDom('fight', domString);
  runningAway();
  committingViolence();
};

const fightGradualDecline = () => {
  strength -= 7;
  document.getElementById('fightProgress').value = strength;
};

const fightGradualDeclineSeconds = () => {
  setInterval(fightGradualDecline, 20000);
};

export default { fightActionBuilder, fightGradualDeclineSeconds };
