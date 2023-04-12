export const ErrorMessage = ({ error }) => {
  return (
    <div className="error-message">
      <p>
        An error occurred while processing your request, please try again later.
      </p>
      <h3>Errors</h3>
      <ul>
        <li>
          {error.status ? "Status :" + error.status : "No response from API"}
        </li>
        {error.statusText && <li>{error.statusText}</li>}
      </ul>
    </div>
  );
};
