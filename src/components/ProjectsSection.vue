<script setup lang="ts">
import { ref } from 'vue'
import { projectData, type Project } from '@/data/projects'

const projects = ref<Project[]>(projectData)

const categoryColors: Record<string, string> = {
  'full-stack': 'blue',
  'front-end': 'pink',
  'back-end': 'grey',
  'automation': 'orange',
  'ia': 'yellow',
}
function navigateTo(url: string) {
  if (url) window.open(url, '_blank')
}

function getImage(imagePath: string) {
  if (!imagePath) return '' // evita undefined
  return new URL(`../assets/img/${imagePath}`, import.meta.url).href
}
</script>

<template>
  <div class="features-section wrapper">
    <div class="container">

      <v-row class="justify-center mx-12">
        <v-col v-for="project in projects" :key="project.id" cols="12" md="4" sm="12" class="d-flex">
          <v-card v-if="project.title != ''" class="feature-card d-flex flex-column" hover height="100%" width="100%">
            <v-img v-if="project.image != ''" :src="getImage(project.image)" width="100%" height="300px" cover />
            <div v-else-if="project.private == true" width="100%" style="height: 300px"
              class="d-flex flex-column justify-center align-center text-center bg">
              <v-icon icon="mdi-lock" />
              <h3>Projeto Confidencial</h3>
              <h5>Detalhes sob demanda</h5>
            </div>
            <div v-else width="100%" style="height: 300px"
              class="d-flex flex-column justify-center align-center text-center bg">
              <v-icon icon="mdi-image" />
              <h3>Sem Imagem</h3>

            </div>
            <!-- Ícone do Card -->
            <v-card-title class="project-title d-flex align-center justify-space-between">
              <!-- ESQUERDA -->
              <div class="d-flex align-center ga-2">
                <h2 class="ma-0">
                  {{ project.title }}
                </h2>
                <v-chip size="x-small" :color="categoryColors[project.category] || 'primary'" label class="tag-chip">
                  {{ project.category }}
                </v-chip>
              </div>

              <!-- DIREITA -->
              <div class="d-flex align-center">
                <v-icon v-if="project.github != ''" icon="mdi-github" size="20" color="white" class="mr-2"
                  @click="navigateTo(project.github)" />
                <v-icon v-if="project.link != ''" icon="mdi-link" size="20" color="white"
                  @click="navigateTo(project.link)" />
              </div>
            </v-card-title>
            <!-- Conteúdo do Card -->
            <v-card-text class="text-left flex-grow-1 project-desc">
              {{ project.detail }}
            </v-card-text>
            <div class="d-flex flex-wrap ga-1 justify-left ml-4">
              <v-chip v-for="tag in project.tags" :key="tag" size="x-small" color="primary" variant="outlined"
                class="tag-chip mb-2">
                {{ tag }}
              </v-chip>
            </div>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.bg {
  color: rgba(255, 255, 255, 0.398);
  background: rgba(255, 255, 255, 0.152);
}

.project-title {
  font-family: "GOBOLD LIGHT";
  color: white;
  font-size: 1rem;
}

.project-desc {
  color: rgba(255, 255, 255, 0.769);
  font-size: 0.8rem;
}

.tag-chip {
  border-radius: 4px !important;
}

.wrapper {
  background: linear-gradient(180deg, #0E172B 0%, #1d2c4b 100%);
  width: 100%;
}

.features-section {
  padding: 4rem 0;
  min-height: 50vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-family: "GOBOLD LOWPLUS";
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
  color: #8899aa;
  margin-bottom: 1rem;
}

custom-list {
  text-align: left;
}

.list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  gap: 8px;
}

.list-icon {
  margin-top: 2px;
  flex-shrink: 0;
}

.list-text {
  flex: 1;
  line-height: 1.4;
  font-size: 16px;
  text-align: left;
  color: rgba(255, 255, 255, 0.79);
}

.feature-card {
  transition: all 0.3s ease;
  border: 0.7px solid white !important;
  background-color: #0E172B;
  border-radius: 12px !important;
  overflow: hidden;
  cursor: default;
}

.feature-card:hover {
  /* transform: translateY(-8px); */
  box-shadow: 0 5px 10px rgba(251, 252, 251, 0.636) !important;
}

.card-icon-container {
  font-family: 'GOBOLD LIGHT';
  font-size: 18px;
  color: rgb(var(--v-theme-primary));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 1rem;
  gap: 6px;
}

.card-icon {
  padding: 1rem;
  border-radius: 10%;
  background: rgba(255, 255, 255, 0.1);
}

.feature-btn {
  min-width: 140px;
  border-radius: 25px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

/* Efeitos especiais para cards em destaque */
.v-card.v-card--variant-elevated {
  background: linear-gradient(135deg, var(--v-theme-primary) 0%, #667eea 100%);
}

/* Responsividade */
@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .features-section {
    padding: 2rem 0;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.75rem;
  }

  .card-icon-container {
    padding: 1.5rem 1rem 0.5rem;
  }

  .feature-card {
    margin-bottom: 1rem;
  }
}
</style>
