import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "0648848dc7mshab3054cfda6ae35p1790d9jsn2ca02354d89d",
    },
  });

  return data;
};
