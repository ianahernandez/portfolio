<template>
  <div>
    <div class="flex">
      <vertical-nav-menu :menuExpanded="menuExpanded"
                        v-hammer:swipe.left="collapseExpand"/>
      <transition mode="out-in">
        <div class="content-layout ml-0 lg:ml-64">
          <!-- Header -->
          <div class="header mt-4">
            <button @click="collapseExpand">Menu</button>
            <i class="icofont-globe mr-2"/>ES</div>
          <h1 class="title">Sobre mí</h1>
          <router-view />
          <!-- Footer -->
          <div class="footer">
            <span>Ana Hernández 2020</span>
            <span>Hecho a mano y con <i class="icofont-heart text-violet"/></span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VerticalNavMenu from "../components/vertical-nav-menu/VerticalNavMenu";
export default {
  data(){
    return{
      menuExpanded: false,
    }
  },
  components: {
    VerticalNavMenu
  },
  methods: {
    collapseExpand(){
      console.log("test")
      this.menuExpanded = !this.menuExpanded
    }
  },
};
</script>