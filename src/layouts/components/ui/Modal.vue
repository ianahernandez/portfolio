<template>
  <div :class="`modal ${show ? 'show' : ''}`">
    <div class="modal-body">
      <div class="modal-header">
        <h2 class="title">{{title}}</h2>
        <button class="btn-icon modal-close" @click="$emit('update:show',false)">&times;</button>
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
  props: ["title", "show"],
}

</script>