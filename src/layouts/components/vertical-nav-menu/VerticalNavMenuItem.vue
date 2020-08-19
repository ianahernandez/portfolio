<template>
  <div>
    <router-link :class="isActive ? 'menu-item active' : 'menu-item'" :to="url">{{name}}</router-link>
  </div>
</template>

<script>
export default {
  props:{
    name: {
      type: String,
      required: true,
      default: "Menu item"
    },
    url: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    isActive(){
      return this.$route.path == this.url
    }
  },
}
</script>