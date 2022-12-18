export const Arrow = ({ direction, onClick }) => {
  return (
    <button className={`arrow arrow--${direction}`} onClick={onClick}>
      <i className={`fa fa-angle-${direction}`}></i>
    </button>
  );
};
