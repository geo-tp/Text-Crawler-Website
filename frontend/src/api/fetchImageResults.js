import { fetchJson } from "./fetchJson";

export const fetchImageResults = async (url, setData) => {
    setData(null);

    const response = await fetchJson(url);

    if (response.hasOwnProperty("body")) {
      setData(response.body);
    } else {
      setData(null);
    }

    return response;
  };