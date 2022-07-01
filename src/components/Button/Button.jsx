import s from './Button.module.css';
const Button = props => {
  const {
    onClick = () => {},
    title = '',
    type = 'button',
    isActive = true,
    id = '',
  } = props;
  return (
    <button
      disabled={!isActive}
      type={type}
      onClick={onClick}
      className={isActive ? s.button__activ : s.button__unactiv}
      id={id}
    >
      {title}
    </button>
  );
};

export default Button;
