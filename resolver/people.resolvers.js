const { callApi } = require("../utils/http.request");

const getPeople = async (page) => {
  try {
    const { results, count } = await callApi({ page });
    return { results, count };
  } catch (error) {
    throw error;
  }
};

const getPersonByName = async (search) => {
  try {
    const { results, count } = await callApi({ search });
    return { results, count };
  } catch (error) {
    throw error;
  }
};

const resolvers = {
  Query: {
    people(parent, args) {
      return getPeople(args.page);
    },
    person(parent, args) {
      return getPersonByName(args.name);
    },
  },
};

module.exports = {
  resolvers,
};
