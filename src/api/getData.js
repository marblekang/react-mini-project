import axios from "axios";

export const getData = async (query, page = 1) => {
  const data = axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&page=${page}&api-key=${process.env.REACT_APP_API_KEY}`
  );

  const result = await data;
  return result;
};
