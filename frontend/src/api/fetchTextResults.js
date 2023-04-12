import { fetchJson } from "./fetchJson";

export const fetchTextResults = async (url, setIsLoading, setData, setError) => {
    setIsLoading(true);
    setData(null);

    const response = await fetchJson(url);

    if (response.hasOwnProperty("results")) {
      setData(response);
      setError(null);
    } else {
      setError(response);
      setData(null);
    }

    setIsLoading(false);

    return response;
  };