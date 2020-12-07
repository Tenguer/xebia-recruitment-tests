<template>
  <div class="card">
    <div class="card-image">
      <img :src="book.book.cover" :alt="`Couvertude de : ${book.book.title}`" />
    </div>

    <div class="card-content">
      <router-link
        :to="{ name: 'books', params: { id: book.book.isbn } }"
        class="content-title"
      >
        {{ book.book.title }}
      </router-link>

      <div>{{ book.book.price }} €</div>

      <div>Quantité: {{ book.qty }}</div>

      <div>
        <button @click="removeBookCart(book.book.isbn)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions("cart", ["removeBookCart"])
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 6px;
  display: flex;
  height: 200px;
  padding: 15px;
  margin: 10px;
  overflow: hidden;
  background: white;

  &-image {
    width: 140px;
    padding: 0 40px 0 20px;
  }

  .content {
    &-title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  img {
    height: 100%;
  }
}
</style>
