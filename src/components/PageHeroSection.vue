<script setup lang="ts">
defineProps<{ title: string, chip: string, color: string, btn: boolean }>();
</script>

<template>
  <div ref="heroRef" class="wrapper">
    <div class="text-center">
      <v-chip class="ma-2 mt-8 mb-8 v-chip-glow-intense" color="success" variant="outlined">
        {{ chip }}
      </v-chip>
      <h3>{{ title }}</h3>
      <div class="buttons pt-5">
        <v-btn v-if=btn size="small" to="/contact" color="primary" append-icon="mdi-arrow-right-thin" variant="tonal"
          class="px-3 mt-4 mr-6">Começar um
          Projeto</v-btn>

      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: "GOBOLD HOLLOW BOLD";
  font-size: 60px;
  color: rgba(225, 225, 225, 0.813);
}

.wrapper {
  background-color: #0E172B;
  width: 100%;
  height: 300px;
}
</style>
