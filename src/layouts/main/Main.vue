<template>
  <div>
    <div class="flex">
      <vertical-nav-menu />
      <transition mode="out-in">
        <div
          class="content-layout"
        >
          <!-- Header -->
          <div class="bg-teal cursor-pointer">
            Header
          </div>
        <router-view
                />
                 <!-- Footer -->
          <div class="bg-teal cursor-pointer">
            Footer
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