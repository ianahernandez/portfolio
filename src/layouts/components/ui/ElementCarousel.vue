<template>
  <div class="mr-3 py-2">
    <div class="item-carousel">
      <img :src="foto" :alt="text">
      <p>{{text}}</p>
    </div>
    
  </div>
</template>
<script>
export default {
  props: ["foto", "text"]
}
</script>