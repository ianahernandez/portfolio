<template>
  <div class="home">
    Home
    <button class="btn btn-gray">Test</button>
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
