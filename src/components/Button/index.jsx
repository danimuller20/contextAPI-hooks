import P from 'prop-types';

export const Button = ({ children, onButtonClick, isBtnDisabled = false }) => {
  return (
    <button disabled={isBtnDisabled} onClick={onButtonClick} style={{ fontSize: '60px' }}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  isBtnDisabled: P.bool,
};
