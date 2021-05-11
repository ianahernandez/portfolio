<template>
  <div class="flex flex-col content-full justify-center items-center">
    <img class="w-64" src="@/assets/img/cactus.png" alt="Image not found">
    <h1 class="title pl-0">Página no encontrada</h1>
    <p class="text-center pt-2">Parece que te has perdido, pero no pasa nada, vuelve al inicio</p>
    <router-link class="btn btn-primary px-5 mt-2" to="/">
      Ir al inicio
    </router-link>
  </div>
</template>
<style lang="scss">
  .content-full{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    top: 50px;
  }
</style>
<script>
export default {
  name: "notFound",
  async mounted() {
    this.$parent.titleName = "";
  }
}
</script>