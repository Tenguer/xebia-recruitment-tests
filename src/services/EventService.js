import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://henri-potier.xebia.fr/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getApi() {
    return apiClient.get("/books");
  },
  getBook(id) {
    return apiClient.get("/books/" + id);
  },
  getOffer(books) {
    return apiClient.get(`/books/${books}/commercialOffers`);
  }
};
