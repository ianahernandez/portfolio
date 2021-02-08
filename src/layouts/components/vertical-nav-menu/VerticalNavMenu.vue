<template>
  <div>
    <div :class="`vertical-nav-menu vertical-scroll z-20 ${ menuExpanded? 'menu-show': '' }`">
      <h1 class="menu-title">Ana Hernández</h1>
      <div class="menu-content vertical-scroll">
        <item name="Sobre mí" url="/sobre-mi" icon="about" @click.native="$emit('closeMenu')"></item>
        <item name="Resumen" url="/resumen" icon="certificate" @click.native="$emit('closeMenu')"></item>
        <item name="Portafolio" url="/portafolio" icon="work-1" @click.native="$emit('closeMenu')"></item>
        <item name="Blog" url="/blog" icon="list" @click.native="$emit('closeMenu')"></item>
        <item name="Contacto" url="/contacto" icon="message-globe" @click.native="$emit('closeMenu')"></item>
      </div>
    </div>
    <div v-if="menuExpanded" class="lg:hidden bg-gray-700 opacity-50 h-screen w-full absolute top-0 left-0 z-10"  @click="$emit('closeMenu')"></div>
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