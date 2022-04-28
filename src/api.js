import axios from "axios";

const BASE_URL = `http://jservice.io/`;

export const getClues = () => {
  return axios
    .get(`${BASE_URL}api/clues`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCategories = () => {
  axios
    .get(`${BASE_URL}api/categories`)
    .then((response) => {
      console.log("categories response");
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getCategory = () => {
  axios.get(`${BASE_URL}api/category`).then((response) => {
    console.log(response);
  });
};

export const getRandom = () => {
  axios.get(`${BASE_URL}api/random?count=25`).then((response) => {
    console.log(response);
  });
};
