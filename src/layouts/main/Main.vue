<template>
  <div>
    <div class="flex">
      <vertical-nav-menu :menuExpanded="menuExpanded"
                         @closeMenu="collapseExpand"/>
        <div class="content-layout ml-0 lg:ml-56">
          
            <!-- Header -->
            <div class="header md:mt-4">
              <!-- <button class="text-gray-700"><i class="icon-globe mr-1"/>ES</button> -->
              <button class="nav-menu-button lg:hidden" @click="collapseExpand" aria-label="Desplegar menu"><i class="icon-bars"/></button>
              </div>
            <h1 v-if="titleName" class="title">{{ titleName }}</h1>
            <router-view/>
            <!-- Footer -->
            <div class="footer">
              <span>Ana Hernández 2020</span>
              <span class="flex">Hecho a mano y con <i class="icon-heart text-violet ml-2"/></span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import VerticalNavMenu from "../components/vertical-nav-menu/VerticalNavMenu";
export default {
  data(){
    return{
      menuExpanded: false,
      titleName: null,
      loading: true,
    }
  },
  components: {
    VerticalNavMenu
  },
  methods: {
    collapseExpand(){
      this.menuExpanded = !this.menuExpanded
    }
  },
};
</script>