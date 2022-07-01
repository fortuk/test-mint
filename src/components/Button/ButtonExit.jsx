import s from './ButtonExit.module.css';

function ButtonExit({ type, onClick, buttonName, disabled }) {
  return (
    <div className={s.btnExit}>
      <button type={type} onClick={onClick} disabled={disabled}>
        {buttonName}
      </button>
    </div>
  );
}

export { ButtonExit };
