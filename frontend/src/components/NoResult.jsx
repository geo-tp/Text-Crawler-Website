export const NoResult = ({ keywords }) => {
  return (
    <div className="no-result">
      <p>
        There is no text result for your string pattern (<b>{keywords}</b>)
      </p>
      <h3>Hints</h3>
      <ul>
        <li>The crawler tries to match exact string pattern.</li>
        <li>Keywords are not case sensitive.</li>
        <li>
          Suppose you try to find 'rogue trainer', the crawler will search for
          all occurences of this string, but 'trainer rogue' will not return the
          same results.
        </li>
        <li>
          You could find informations about a precise resource by typing its
          exact name : Thomas Miller, Blackmouth Oil, Costly Menace, Beast
          Taming...
        </li>
        <li>
          For website results, you can see archive date into the filename, for
          example : /20040815190030/ means 15/08/2004 at 19:00:30.
        </li>
        <li>Regexp are not allowed, you must use a basic string.</li>
        <li>Results are limited to 10 000 for a pattern.</li>
        <li>To have a better chance of having an image corresponding to a resource, try to use the most reliable word, for example: "Tarnished Chain Vest", you could try to use only the keyword "Tarnished".</li>
      </ul>
    </div>
  );
};
