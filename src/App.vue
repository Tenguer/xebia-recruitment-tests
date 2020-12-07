<template>
  <div id="app">
    <nav>
      <div class="nav-link"><router-link to="/">Home</router-link></div>
      <CartElem></CartElem>
    </nav>
    <router-view />
  </div>
</template>

<script>
import CartElem from "@/components/CartElem.vue";

export default {
  components: {
    CartElem
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 110px 30px 0 30px;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

nav {
  display: flex;
  padding: 30px;
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 14px #807878;
  top: 0;
  left: 0;

  .nav-link {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 20px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  user-select: none;
}
</style>
