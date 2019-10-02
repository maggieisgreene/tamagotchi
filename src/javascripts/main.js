import '../styles/main.scss';
import eat from './components/eat';

const init = () => {
  eat.eatActionBuilder();
  eat.hunger();
};

init();
