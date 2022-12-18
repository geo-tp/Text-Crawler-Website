import { RESULT_CATEGORY } from "../config/general";

export function sortSearchResults(results) {
  const categoryArrays = [];

  for (let i = 0; i < RESULT_CATEGORY.length; i++) {
    categoryArrays.push([]);
  }

  for (let result of results) {
    const catIndex = RESULT_CATEGORY.indexOf(result.title);
    categoryArrays[catIndex].push(result);
  }

  const finalResults = [];

  for (let categoryArray of categoryArrays) {
    finalResults.concat(categoryArray);
  }

  return finalResults;
}
