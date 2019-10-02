import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import sleep from './components/sleep';

const init = () => {
  eat.eatActionBuilder();
  eat.eatGradualDeclineSeconds();
  play.playActionBuilder();
  play.playGradualDeclineSeconds();
  sleep.sleepActionBuilder();
  sleep.sleepGradualDeclineSeconds();
};

init();
