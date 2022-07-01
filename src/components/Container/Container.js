import shortid from 'shortid';
import s from './Container.module.css';
const Container = props => {
  const { direction, children } = props;
  return (
    <div className={direction ? s.wrapper__row : s.wrapper__column}>
      {children}
    </div>
  );
};

export default Container;
