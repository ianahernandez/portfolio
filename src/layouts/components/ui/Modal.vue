<template>
  <div :class="`modal ${show ? 'show' : ''}`">
    <div v-if="show" :class="`modal-body ${classes || ''}`" data-aos="zoom-in" data-aos-duration="1000">
      <div class="modal-header">
        <h2 class="title">{{title}}</h2>
        <button v-if="!hideClose" class="btn-icon modal-close" @click="$emit('update:show',false)">&times;</button>
      </div>
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "show", "classes", "hideClose"],
}

</script>