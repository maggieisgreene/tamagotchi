import utilities from '../helpers/utilities';

let energy = 100;

const napping = () => {
  document.getElementById('napButton').addEventListener('click', () => {
    const addingSleep = energy + 50;
    if (addingSleep > 100) {
      energy = 100;
    } else {
      energy = addingSleep;
    }
    document.getElementById('sleepProgress').value = energy;
  });
};

const deepSlumbering = () => {
  document.getElementById('deepSlumberButton').addEventListener('click', () => {
    const addingMoreSleep = energy + 60;
    if (addingMoreSleep > 100) {
      energy = 100;
    } else {
      energy = addingMoreSleep;
    }
    document.getElementById('sleepProgress').value = energy;
  });
};

const sleepActionBuilder = () => {
  let domString = `<progress id="sleepProgress" max="100" value="${energy}"></progress>`;
  domString += '<h1 id="sleepHeader">SLEEP</h1>';
  domString += '<button id="napButton">Nap</button> <button id="deepSlumberButton">Deep Slumber</button>';
  utilities.printToDom('sleep', domString);
  napping();
  deepSlumbering();
};

const sleepGradualDecline = () => {
  energy -= 1;
  document.getElementById('sleepProgress').value = energy;
};

const sleepGradualDeclineSeconds = () => {
  setInterval(sleepGradualDecline, 2000);
};

export default { sleepActionBuilder, sleepGradualDeclineSeconds };
