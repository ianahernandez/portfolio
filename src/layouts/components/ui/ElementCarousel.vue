<template>
  <div class="mr-3 py-2">
    <div :class="`item-carousel ${ isActive ? 'active' : ''} transition duration-500 ease-in-out` " @click="$emit('select')">
      <img :src="foto" :alt="text">
      <p>{{text}}</p>
    </div>
    
  </div>
</template>
<script>
export default {
  props: ["foto", "text", "isActive"]
}
</script>