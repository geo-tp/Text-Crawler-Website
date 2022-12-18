export function getActualPageNameFromWindowPath(path) {
  let splitted_path = path.split("/");
  return splitted_path[1];
}

export function getKeywordsFromWindowPath(path) {
  return path.split("/").pop();
}

export function getPageNumberFromUrl(url) {
  let page = url.split("&").pop();
  const number = page.split("=").pop();

  return number;
}

export function sanitizeContent(content) {
  return content
    .toLowerCase()
    .replaceAll("\\t", "")
    .replaceAll("\\n", "")
    .replaceAll("<br>", "")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "");
}

export function removeHtmlCharCode(string) {
  return string.replaceAll("%20", " ");
}

export function replaceQuestionSymboleByHtmlCode(string) {
  return string.replaceAll("?", "%3F");
}
