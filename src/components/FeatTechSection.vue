<script setup lang="ts">
import { ref } from 'vue'
import { techFeat, techBundle, type Tech } from '@/data/tech'

const techfeat = ref<Tech[]>(techFeat)
const techbundle = ref<Tech[]>(techBundle)

</script>

<template>
  <div class="features-section wrapper">
    <v-container fluid>

      <v-row class="justify-center mx-12">
        <h2 class="section-title">Tech Stack</h2>
      </v-row>

      <v-row class="justify-center mx-12">
        <v-col v-for="tech in techfeat" :key="tech.id" cols="12" md="3" sm="12" class="d-flex justify-center">
          <v-card class="feature-card d-flex flex-column align-center" hover height="100%" width="100%">
            <!-- Ícone do Card -->
            <!-- <v-icon :icon="tech.icon" :color="tech.color" size="30" class="center mt-4">

            </v-icon> -->
            <img :src="`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`" :alt="tech.title"
              width="30" height="30" class="mt-4" />
            <v-card-title class="project-title mb-4">
              {{ tech.title }}
            </v-card-title>
            <!-- Conteúdo do Card -->
          </v-card>
        </v-col>
      </v-row>

      <v-row class=" mx-12">
        <v-col v-for="techb in techbundle" :key="techb.id" cols="6" md="2" sm="6" class="d-flex justify-center">
          <v-card class="feature-card d-flex flex-column align-center" hover height="80%" width="100%">
            <!-- Ícone do Card -->
            <img :src="`https://cdn.simpleicons.org/${techb.icon}/${techb.color.replace('#', '')}`" :alt="techb.title"
              width="30" height="30" class="mt-4" />
            <v-card-title class="project-title mb-4">
              {{ techb.title }}
            </v-card-title>
            <!-- Conteúdo do Card -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.project-title {
  font-family: "GOBOLD LIGHT";
  color: white;
  font-size: 0.9rem;
}

.project-desc {
  color: rgba(255, 255, 255, 0.769);
  font-size: 0.8rem;
}

.tag-chip {
  border-radius: 4px !important;
}

.wrapper {
  background: #1d2c4b;
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
  font-family: "GOBOLD";
  text-align: left;

  font-size: 2.0rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
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
