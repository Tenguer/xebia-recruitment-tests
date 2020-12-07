<template>
  <div class="nav-link">
    <router-link to="/panier">
      <img
        src="../assets/cart-logo.svg"
        class="cart-logo"
        alt="Logo de panier"
      />
      <span class="cart-info">{{ cartListNb }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["cartListNb"])
  }
};
</script>

<style lang="scss" scoped>
.cart-logo {
  width: 20px;
}

.cart-info {
  color: red;
}
</style>
