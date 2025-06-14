<template>
  <v-app-bar app fixed color="bgdark" dark height="80" flat style="z-index: 1005;" class="border-nav">
    <v-container class="d-flex justify-space-between align-center px-4 mx-2 mx-md-10" fluid>
      <!-- Logo -->
      <LogoUI />

      <!-- Menu Desktop -->
      <div class="d-none d-md-flex gap-4">
        <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.to" variant="plain"
          class="glow-effect no-uppercase">
          {{ item.label }}
        </v-btn>
      </div>

      <!-- Botão de Contato -->
      <div>
        <v-btn v-if="smAndDown" to="/contact" icon color="primary" variant="tonal" rounded="lg" class="contact-btn">
          <v-icon>mdi-email-fast-outline</v-icon>
        </v-btn>

        <v-btn v-else to="/contact" color="primary" variant="tonal" prepend-icon="mdi-email-fast-outline"
          class="contact-btn">
          Contato
        </v-btn>
      </div>

      <!-- Ícone Hamburguer -->
      <v-app-bar-nav-icon class="d-md-none" @click="handleClick" />
    </v-container>
  </v-app-bar>

  <!-- Drawer Mobile -->
  <v-navigation-drawer v-model="drawer" temporary absolute location="top" scrim class="d-md-none"
    style="top: 80px; z-index: 1004;">
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.to" link @click="drawer = false">
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
/* Use !important para garantir que sobrescreva */
.v-btn:hover {
  background-color: transparent !important;
}

.border-nav {
  border-bottom: 1px solid rgba(5, 80, 14, 0.255);
}
</style>
<script lang="ts" setup>
import { ref } from 'vue';
import LogoUI from './ui/LogoUI.vue';
import { useDisplay } from 'vuetify';

const drawer = ref(false);
const { smAndDown } = useDisplay(); // detecta mobile/tablet


function handleClick() {
  drawer.value = !drawer.value;
}

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Serviços', to: '/services' },
  { label: 'Projetos', to: '/projects' },
];
</script>
