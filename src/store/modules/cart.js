import EventService from "@/services/EventService";

export const namespaced = true;

export const state = {
  cart: {
    books: [],
    path: [],
    price: 0,
    priceWithoffer: 0
  }
};

export const mutations = {
  SET_CART(state, book) {
    state.cart.books.push(book);
  },
  SET_PRICE(state, price) {
    state.cart.price += price;
  },
  SET_PRICE_WITH_OFFER(state, price) {
    state.cart.priceWithoffer = price;
  },
  ADD_CART(state, { index, qty, price }) {
    state.cart.books[index].qty += qty;
    state.cart.books[index].price = price * state.cart.books[index].qty;
  },
  ADD_TO_PATH(state, id) {
    state.cart.path.push(id);
  },
  ADD_NEW_PATH(state, path) {
    state.cart.path = path;
  },
  REMOVE_CART(state, index) {
    state.cart.books.splice(index, 1);
  }
};

export const actions = {
  // Ajoute un livre dans le panier
  addToCart({ commit, getters, dispatch }, book, qty = 1) {
    const index = getters.getCartIndex(book.isbn);
    const newbook = { book: book, qty, price: book.price };

    if (index >= 0) {
      commit("ADD_CART", { index: index, qty, price: book.price });
    } else {
      commit("SET_CART", newbook);
    }

    commit("ADD_TO_PATH", book.isbn);
    commit("SET_PRICE", book.price);
    dispatch("getOffer");
  },
  // Supprime un livre du panier
  removeBookCart({ commit, getters }, id) {
    const newPath = [];
    const index = getters.getCartIndex(id);

    for (let i = 0; i < state.cart.path.length; i++) {
      if (state.cart.path[i] != id) {
        newPath.push(state.cart.path[i]);
      }
    }

    commit("REMOVE_CART", index);
    commit("ADD_NEW_PATH", newPath);
  },
  // Calcule de la remise
  getOffer({ commit }) {
    EventService.getOffer(state.cart.path)
      .then(response => {
        const offers = response.data.offers;
        let offer = 0;
        let price = state.cart.price;
        let finalPrice = price;

        for (let i = 0; i < offers.length; i++) {
          if (offers[i].type === "percentage") {
            offer = price - (price * offers[i].value) / 100;
          } else if (offers[i].type === "minus") {
            offer = price - offers[i].value;
          } else if (offers[i].type === "slice") {
            if (price > offers[i].sliceValue) {
              offer = Math.floor(
                price - (price / offers[i].sliceValue) * offers[i].value
              );
            }
          }
          if (price > offer && finalPrice > offer) {
            finalPrice = offer;
          }
        }
        commit("SET_PRICE_WITH_OFFER", finalPrice);
      })
      .catch(error => {
        throw error;
      });
  }
};

export const getters = {
  getCartIndex: state => id => {
    return state.cart.books.findIndex(elem => elem.book.isbn === id);
  },
  cartListNb: state => {
    return state.cart.path.length;
  }
};
