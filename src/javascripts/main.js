import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  eat.eatActionBuilder();
  eat.eatGradualDeclineSeconds();
  fight.fightActionBuilder();
  fight.fightGradualDeclineSeconds();
  play.playActionBuilder();
  play.playGradualDeclineSeconds();
  sleep.sleepActionBuilder();
  sleep.sleepGradualDeclineSeconds();
};

init();
