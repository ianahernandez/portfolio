<template>
  <div class="vertical-nav-menu hidden lg:block transition-none">
    <h1 class="font-bold text-2xl text-cream pl-0 text-center">Ana Hernández</h1>
    <div class="mt-16">
      <item name="Sobre mí" url="/sobre-mi"></item>
      <item name="Resumen" url="/resumen"></item>
      <item name="Portafolio" url="/portafolio"></item>
      <item name="Blog" url="/blog"></item>
      <item name="Contacto" url="/contacto"></item>
    </div>
  </div>
</template>

<script>
import Item from './VerticalNavMenuItem'
export default {
  components: {
    Item
  }
}
</script>