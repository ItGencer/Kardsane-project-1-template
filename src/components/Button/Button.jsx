import './Button.scss';


function Button({ value, onClick, type = 'button', className = '' }) {
  return (
    <button type={type} className={`btn btn__${className}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;