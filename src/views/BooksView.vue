<template>
  <div class="card">
    <div class="card-image">
      <img :src="book.cover" :alt="`Couvertude du livre : ${book.title}`" />
    </div>

    <div class="card-content">
      <div class="content-title">{{ book.title }}</div>
      <div>Réf: {{ book.isbn }}</div>
      <div class="content-synopsis">
        <p>{{ book.synopsis[synopsis()] }}</p>
      </div>
    </div>
    <CartButton :book="book" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartButton from "@/components/CartButton.vue";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created() {
    this.fetchBook(this.id);
  },
  components: {
    CartButton
  },
  computed: {
    ...mapState("home", ["book"])
  },
  methods: {
    synopsis() {
      return Math.floor(Math.random() * Math.floor(this.book.synopsis.length));
    },
    ...mapActions("home", ["fetchBook"])
  }
};
</script>

<style lang="scss" scoped>
.content-synopsis {
  height: 130px;
  overflow: scroll;
}
</style>
