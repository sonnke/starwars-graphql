const axios = require("axios");
const queryString = require("query-string");

// const API_URL = "https://swapi.dev/api/people"; NB: this API is down
const API_URL = "https://swapi.py4e.com/api/people"; // an alternative api

const callApi = async (query) => {
  const q = queryString.stringify(query);
  const fulllUrl = `${API_URL}?${q}`;
  return await axios.get(fulllUrl).then((res) => res.data);
};

module.exports = {
  callApi,
};
