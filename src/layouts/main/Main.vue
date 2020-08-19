<template>
  <div>
    <div class="flex">
      <vertical-nav-menu />
      <transition mode="out-in">
        <div class="content-layout ml-0 lg:ml-64">
          <!-- Header -->
          <div class="header mt-4">ES</div>
          <h1 class="title">Sobre mí</h1>
          <router-view />
          <!-- Footer -->
          <div class="footer">
            <span>Ana Hernández 2020</span>
            <span>Hecho a mano y con</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VerticalNavMenu from "../components/vertical-nav-menu/VerticalNavMenu";
export default {
  components: {
    VerticalNavMenu
  }
};
</script>