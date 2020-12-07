<template>
  <div class="cart">
    <div v-if="cart.books.length === 0">
      <h2>Votre panier est vide</h2>
      <ButtonReturnHome />
    </div>

    <div v-else>
      <BookCart v-for="book in cart.books" :key="book.book.isbn" :book="book" />

      <div class="price">
        <div>Prix total: {{ cart.price }} {{ devise }}</div>
        <div>Prix après redduction: {{ cart.priceWithoffer }} {{ devise }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookCart from "@/components/BookCart";
import ButtonReturnHome from "@/components/ButtonReturnHome";

export default {
  data() {
    return {
      devise: "€"
    };
  },
  components: {
    BookCart,
    ButtonReturnHome
  },
  computed: {
    ...mapState("home", ["books"]),
    ...mapState("cart", ["cart"])
  }
};
</script>

<style lang="scss" scoped>
.cart {
  background: #ececec;
  height: 91vh;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .price {
    background: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
}
</style>
