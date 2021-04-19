import axios from "axios";

export default {
  searchBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  getBooks: function () {
    console.log("getBooks");
    return axios.get("/api/books").then((result) => result.data);
  },

  saveBook: function (data) {
    console.log(data);
    return axios.post("/api/books", data).then((result) => result.data);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
};
