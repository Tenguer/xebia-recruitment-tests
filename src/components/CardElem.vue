<template>
  <article class="book">
    <div class="book-img">
      <router-link
        :to="{ name: 'books', params: { id: book.isbn } }"
        class="book-title"
      >
        <img :src="book.cover" :alt="`Couvertude de : ${book.title}`" />
      </router-link>
    </div>

    <div class="book-info">
      <div>
        <router-link
          :to="{ name: 'books', params: { id: book.isbn } }"
          class="book-title"
        >
          {{ book.title }}
        </router-link>
        <div>{{ book.price }}€</div>
      </div>

      <CartButton :book="book" />
    </div>
  </article>
</template>

<script>
import CartButton from "@/components/CartButton.vue";

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    CartButton
  }
};
</script>

<style lang="scss" scoped>
.book {
  width: 400px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 2px 1px 2px #b8e5f7;
  border: 1px solid #b5e5f7;
  margin: 10px;
  padding: 10px;
  display: flex;

  &-img {
    width: 137px;
    margin-right: 30px;
  }

  &-title,
  & a {
    font-weight: bold;
    color: black;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    height: 100%;
  }
}
</style>
