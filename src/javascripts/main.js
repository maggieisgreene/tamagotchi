import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';

const init = () => {
  eat.eatActionBuilder();
  eat.hunger();
  play.playActionBuilder();
  play.gradualDecline();
};

init();
