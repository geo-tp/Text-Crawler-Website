export const ResultCount = ({ number, time }) => {
  return (
    <div className="result-count">
      {number === 10000 ? (
        <p>More than 10 000 results found ({time} seconds)</p>
      ) : (
        <p>
          {number} results found ({time} seconds)
        </p>
      )}
    </div>
  );
};
