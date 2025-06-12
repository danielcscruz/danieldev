<template>
  <v-footer color="bgdark" dark fluid class="footer-component justify-center pa-4">
    <span>&copy; {{ new Date().getFullYear() }} - Meu Nome</span>
  </v-footer>
</template>

<style scoped>
.footer-component {
  /* NÃO usar position: fixed */
  position: relative;
  /* ou static */
  margin-top: auto;
}
</style>
