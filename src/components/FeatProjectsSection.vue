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

</script>

<template>
  <div class="features-section wrapper">
    <div class="container">

      <v-row class="mx-12 align-center justify-space-between">
        <div class="d-flex align-center ga-2">
          <v-icon icon="mdi-source-fork" color="primary" size="28" class="card-icon" />
          <h2 class="section-title ma-0">Projetos Destacados</h2>
        </div>
        <div>
          <v-btn size="small" to="/projects" color="primary" append-icon="mdi-arrow-right-thin" variant="text">
            Ver todos Projetos
          </v-btn>
        </div>
      </v-row>

      <v-row class="justify-center mx-12">
        <v-col v-for="project in projects.filter(f => f.feat === true)" :key="project.id" cols="12" md="3" sm="12"
          class="d-flex">
          <v-card class="feature-card d-flex flex-column" hover height="100%">
            <!-- Ícone do Card -->
            <v-card-title class="project-title">
              {{ project.title }}
              <v-chip size="x-small" :color="categoryColors[project.category] || 'primary'" label class="tag-chip">
                {{ project.category }}
              </v-chip>
            </v-card-title>
            <!-- Conteúdo do Card -->
            <v-card-text class="text-left flex-grow-1 project-desc">
              {{ project.description }}
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
  background: #0E172B;
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
