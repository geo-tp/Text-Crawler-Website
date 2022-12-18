export const NoResult = ({ keywords }) => {
  return (
    <div className="no-result">
      <p>
        There is no result for your string pattern (<b>{keywords}</b>)
      </p>
      <h3>Hints</h3>
      <ul>
        <li>The crawler try to match exact string pattern</li>
        <li>Keywords are not case sensitive.</li>
        <li>
          Assume you try to find 'rogue trainer', the crawler will search for
          all occurences of this string, but 'trainer rogue' will not return the
          same results.
        </li>
        <li>
          Only normal string are allowed for pattern, you can't use regexp.
        </li>
        <li>Results are limited to 10 000 for a pattern.</li>
      </ul>
    </div>
  );
};
