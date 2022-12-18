import {
  replaceQuestionSymboleByHtmlCode,
  sanitizeContent,
} from "../utils/stringUtils";

export const Result = ({ data, query }) => {
  const sanitizedContent = sanitizeContent(data.content);
  const hilightedContent = sanitizedContent.replaceAll(
    query.toLowerCase(),
    `<b>${query}</b>`
  );

  const getFormattedTitle = () => {
    let splitted_title = data.title.split("/");
    splitted_title.shift();

    return splitted_title.join("/");
  };

  // const getRightIcon = () => {
  //   switch (data.source) {
  //     case "Text":
  //       return "fas fa-file-text";

  //     case "Website":
  //       return "fas fa-globe";

  //     case "Forum":
  //       return "fas fa-comments";

  //     case "Database":
  //       return "fas fa-database";

  //     case "Various":
  //       return "fas fa-ellipsis-h";

  //     default:
  //       return "fas fa-file";
  //   }
  // };

  return (
    <div className="result">
      <a href={data.link} className="result__source">
        {/* <i class={getRightIcon()}></i> */}
        <span>{data.source}</span>
      </a>
      <a
        href={replaceQuestionSymboleByHtmlCode(data.link)}
        className="result__title"
      >
        {getFormattedTitle()}
      </a>
      <p
        className="result__content"
        dangerouslySetInnerHTML={{ __html: hilightedContent }}
      ></p>
    </div>
  );
};
