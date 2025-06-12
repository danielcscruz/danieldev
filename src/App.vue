<script lang="ts" setup>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';
import ParticleDots from './components/ParticleDots.vue';
</script>
<template>
  <v-app>
    <div>
      <NavbarComp />
    </div>
    <v-main class="main-content">
      <ParticleDots />
      <router-view />
    </v-main>
    <FooterComp />
  </v-app>
</template>

<style scoped>
.main-content {
  padding-top: 80px !important;
  min-height: calc(100vh - 80px);
  width: 100% !important;
  max-width: 100% !important;
}
</style>
