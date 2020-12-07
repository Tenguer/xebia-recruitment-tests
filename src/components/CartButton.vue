<template>
  <button @click="addToCart(book)" class="btn-add">
    {{ btnText }}
  </button>
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
  data() {
    return {
      btnText: "Ajouter au panier"
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"])
  }
};
</script>

<style lang="scss" scoped>
.btn-add {
  background: orange;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 170px;
}
</style>
