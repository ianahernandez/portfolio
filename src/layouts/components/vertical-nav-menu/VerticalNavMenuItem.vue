<template>
  <div>
    <router-link :class="isActive ? 'menu-item active' : 'menu-item'" :to="url">
      <i :class="`icofont-${icon} mr-2`"></i>
      {{name}}
    </router-link>
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
    },
    icon:{
      type: String,
      default: 'at'
    }
  },
  computed: {
    isActive(){
      return this.$route.path == this.url
    }
  },
}
</script>