import utilities from '../helpers/utilities';

let fun = 50;

const superFunPlaying = () => {
  document.getElementById('bowlingButton').addEventListener('click', () => {
    const addingMoreFun = fun + 50;
    if (addingMoreFun > 100) {
      fun = 100;
    } else {
      fun = addingMoreFun;
    }
    document.getElementById('playProgress').value = fun;
  });
};

const funPlaying = () => {
  document.getElementById('bicyclingButton').addEventListener('click', () => {
    const addingFun = fun + 2;
    if (addingFun > 100) {
      fun = 100;
    } else {
      fun = addingFun;
    }
    document.getElementById('playProgress').value = fun;
  });
};

const playActionBuilder = () => {
  let domString = `<progress id="playProgress" max="100" value="${fun}"></progress>`;
  domString += '<h1 id="playHeader">PLAY</h1>';
  domString += '<button id="bowlingButton">Bowling</button> <button id="bicyclingButton">Bicycling</button>';
  utilities.printToDom('play', domString);
  superFunPlaying();
  funPlaying();
};

const playGradualDecline = () => {
  fun -= 25;
  document.getElementById('playProgress').value = fun;
};

const playGradualDeclineSeconds = () => {
  setInterval(playGradualDecline, 40000);
};

export default { playActionBuilder, playGradualDeclineSeconds };
