import { API_URL } from "../config/general";

export const fetchJson = async (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw response;
    })
    .then((data) => {
      return data;
    })

    .catch((error) => {
      return error;
    });
};
