<template>
  <div :class="`vertical-nav-menu vertical-scroll sb-thumb:bg-red-500 sb-track:rounded ${ menuExpanded? 'menu-show': '' }`">
    <h1 class="menu-title">Ana Hernández</h1>
    <div class="menu-content vertical-scroll">
      <item name="Sobre mí" url="/sobre-mi" icon="learn"></item>
      <item name="Resumen" url="/resumen" icon="license"></item>
      <item name="Portafolio" url="/portafolio" icon="bag-alt"></item>
      <item name="Blog" url="/blog" icon="list"></item>
      <item name="Contacto" url="/contacto" icon="comment"></item>
    </div>
  </div>
</template>

<script>
import Item from './VerticalNavMenuItem'
export default {
  props: {
    menuExpanded:{
      type: Boolean,
      default: false
    }
  },
  components: {
    Item
  }
}
</script>