import utilities from '../helpers/utilities';

let full = 100;

const healthyEating = () => {
  document.getElementById('healthyButton').addEventListener('click', () => {
    const addingHealth = full + 10;
    if (addingHealth > 100) {
      full = 100;
    } else {
      full = addingHealth;
    }
    document.getElementById('eatProgress').value = full;
  });
};

const unhealthyEating = () => {
  document.getElementById('unhealthyButton').addEventListener('click', () => {
    full -= 3;
    document.getElementById('eatProgress').value = full;
  });
};

const eatActionBuilder = () => {
  let domString = `<progress id="eatProgress" max="100" value="${full}"></progress>`;
  domString += '<h1 id="eatHeader">EAT</h1>';
  domString += '<button id="healthyButton">Healthy</button> <button id="unhealthyButton">Unhealthy</button>';
  utilities.printToDom('eat', domString);
  healthyEating();
  unhealthyEating();
};

const eatGradualDecline = () => {
  full -= 7;
  document.getElementById('eatProgress').value = full;
};

const eatGradualDeclineSeconds = () => {
  setInterval(eatGradualDecline, 20000);
};

export default { eatActionBuilder, eatGradualDeclineSeconds };
