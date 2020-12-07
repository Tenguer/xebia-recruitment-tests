<template>
  <div class="page-404">
    <div class="message-404">404</div>
    <div class="information-404">{{ message404 }}</div>
    <ButtonReturnHome />
  </div>
</template>

<script>
import ButtonReturnHome from "@/components/ButtonReturnHome";

export default {
  data() {
    return {
      message404: "Ooops cette page n'existe pas"
    };
  },
  components: {
    ButtonReturnHome
  }
};
</script>

<style lang="scss" scoped>
.page-404 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .message-404 {
    font-size: 300px;
    font-weight: bold;
    font-style: italic;
    background: -webkit-linear-gradient(rgb(84, 130, 190), rgb(156, 235, 103));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .information-404 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 40px;
  }
}
</style>
