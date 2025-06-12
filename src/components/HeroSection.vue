<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHeroVisibilityStore } from '@/stores/heroVisibility'
import logoImg from '@/assets/img/logo.png'

const heroStore = useHeroVisibilityStore()
const heroRef = ref<HTMLElement>()

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (heroRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.intersectionRatio > 0.2
          heroStore.setHeroVisibility(isVisible)
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.2, 0.5, 1]
      }
    )

    observer.observe(heroRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div ref="heroRef" class="hero">
    <div class="text-center">
      <v-chip class="ma-2 mt-8 mb-8 v-chip-glow-intense" color="success" variant="outlined">
        Disponível para Projetos
      </v-chip>
      <v-img :src="logoImg" height="125px" class="mb-5"></v-img>
      <h2><span>Daniel Cruz</span></h2>
      <h3>Desenvolvedor Fullstack</h3>
      <p>Construindo soluções web e automações robustas com Python, <br>Django e tecnologias modernas</p>
      <div class="buttons pt-5">
        <v-btn size="small" to="/contact" color="primary" append-icon="mdi-arrow-right-thin" variant="tonal"
          class="px-3 mt-4 mr-6">Começar um
          Projeto</v-btn>
        <v-btn size="small" to="/projects" color="primary" append-icon="mdi-eye" variant="outlined"
          class="px-3 mt-4">Ver meus
          Projetos</v-btn>

      </div>
    </div>

  </div>
</template>

<style scoped>
h2 {
  font-family: "GOBOLD";
  font-size: 80px;
  line-height: 72px;
  color: rgba(225, 225, 225, 0.813);
}

h3 {
  font-family: "GOBOLD HOLLOW BOLD";
  font-size: 40px;
  color: rgba(225, 225, 225, 0.813);
}

p {
  font-family: "GOBOLD LIGHT";
  font-size: 18px;
  line-height: 36px;
  color: rgba(225, 225, 225, 0.813);
}

span {
  color: #4caf50;
}


.hero {
  background-color: #0E172B;
  width: 100%;
  height: 600px;
}

/* Classe para aplicar glow pulsante ao v-chip */
.v-chip-glow {
  animation: glow-pulse 2s ease-in-out infinite alternate;
}

/* Keyframes para o efeito de glow pulsante */
@keyframes glow-pulse {
  from {
    box-shadow: 0 0 10px #4caf50;
  }

  to {
    box-shadow: 0 0 30px #4caf50, 0 0 40px #4caf50, 0 0 50px #4caf50;
  }
}

/* Versão mais intensa do glow (opcional) */
.v-chip-glow-intense {
  animation: glow-pulse-intense 1s ease-in-out infinite alternate;
}

@keyframes glow-pulse-intense {
  from {
    box-shadow: 0 0 15px #4caf50;
  }

  to {
    box-shadow: 0 0 55px #4caf50, 0 0 70px #4caf50, 0 0 85px #4caf50, 0 0 100px #4caf50;
  }
}

/* Para garantir que o v-chip tenha posição relativa */
.v-chip-glow,
.v-chip-glow-intense {
  position: relative;
  z-index: 1;
}
</style>
