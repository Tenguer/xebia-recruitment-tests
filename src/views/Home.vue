<template>
  <div class="content">
    <div v-if="books">
      <CardElem v-for="book in books" :key="book.isbn" :book="book" />
    </div>
    <div v-else>
      <div class="not-books">
        {{ emptyBooks }}
      </div>
    </div>
  </div>
</template>

<script>
import CardElem from "@/components/CardElem.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      emptyBooks: "Oops il n'y a pas de livre en ce moment"
    };
  },
  components: {
    CardElem
  },
  created() {
    this.$store.dispatch("home/fetchData");
  },
  computed: {
    cartList() {
      return this.cart.length;
    },
    ...mapState("home", ["books"])
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

.not-books {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>
