<script lang="ts" setup>
import { ref } from 'vue'
import { myContact, type Contact } from '@/data/contact'

const contact = ref<Contact>(myContact)
</script>

<template>
  <div class="social-buttons">
    <v-btn v-if="contact.facebook != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.facebook"
      target="_blank">
      <v-icon size="20">mdi-facebook</v-icon>
    </v-btn>

    <v-btn v-if="contact.instagram != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.instagram"
      target="_blank">
      <v-icon size="20">mdi-instagram</v-icon>
    </v-btn>

    <v-btn v-if="contact.linkedin != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.linkedin"
      target="_blank">
      <v-icon size="20">mdi-linkedin</v-icon>
    </v-btn>

    <v-btn v-if="contact.twitter != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.twitter"
      target="_blank">
      <v-icon size="20">mdi-twitter</v-icon>
    </v-btn>

    <v-btn v-if="contact.whatsapp != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.whatsapp"
      target="_blank">
      <v-icon size="20">mdi-whatsapp</v-icon>
    </v-btn>

    <v-btn v-if="contact.github != ''" icon color="primary" variant="plain" class="ma-1" :href="contact.github"
      target="_blank">
      <v-icon size="20">mdi-github</v-icon>
    </v-btn>
  </div>
</template>
