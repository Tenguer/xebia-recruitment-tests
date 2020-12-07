import EventService from "@/services/EventService";

export const namespaced = true;

export const state = {
  book: {},
  books: {}
};

export const mutations = {
  SET_BOOKS_LIST(state, bookList) {
    state.books = bookList;
  },
  SET_BOOK(state, book) {
    state.book = book;
  }
};

export const actions = {
  // Récupère les données du serveur
  fetchData({ commit }) {
    EventService.getApi()
      .then(response => {
        commit("SET_BOOKS_LIST", response.data);
      })
      .catch(error => {
        throw error;
      });
  },
  fetchBook({ commit, getters }, id) {
    const book = getters.getBookById(id);

    if (book) {
      commit("SET_BOOK", book);
    } else {
      EventService.getBook(id)
        .then(response => {
          commit("SET_BOOK", response.data);
        })
        .catch(error => {
          throw error;
        });
    }
  }
};

export const getters = {
  getBookById: state => id => {
    return state.books.find(book => book.isbn === id);
  }
};
