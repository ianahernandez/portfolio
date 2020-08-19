<template>
  <div class="home">
    Content
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      profile: null,
    }
  },
  mounted(){
    //this.$store.dispatch('getProfileInfo');
  }
}
</script>
