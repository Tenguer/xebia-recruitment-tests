<template>
  <router-link to="/" class="return-home">{{ returnHome }}</router-link>
</template>

<script>
export default {
  data() {
    return {
      returnHome: "Retourner à la page d'accueil"
    };
  }
};
</script>

<style lang="scss" scoped>
.return-home {
  display: block;
  color: #fff;
  font-weight: bold;
  background: rgb(96, 148, 168);
  border-radius: 30px;
  padding: 20px;

  &:hover {
    background: rgb(55, 97, 114);
  }
}
</style>
