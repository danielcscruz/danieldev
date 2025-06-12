<script setup lang="ts">
import { ref } from 'vue'
import { featuresData, type Feature } from '../data/services'

const features = ref<Feature[]>(featuresData)

</script>

<template>
  <div class="features-section wrapper">
    <div class="container">

      <v-row class="justify-center mx-12">
        <h2 class="section-title">Minhas Especialidades</h2>
      </v-row>
      <v-row class="justify-center mx-12">
        <v-col v-for="feature in features.filter(f => f.feat === true)" :key="feature.id" cols="12" md="4" sm="12"
          class="d-flex">
          <v-card class="feature-card d-flex flex-column" hover height="100%" width="100%">
            <!-- Ícone do Card -->
            <div class="card-icon-container">
              <v-icon :icon="feature.icon" size="28" class="card-icon" />
              <v-card-title>
                {{ feature.title }}
              </v-card-title>
            </div>
            <!-- Conteúdo do Card -->
            <v-card-text class="text-center flex-grow-1">
              <div class="custom-list">
                <div v-for="(description, index) in feature.listDescription" :key="index" class="list-item">
                  <v-icon :icon="'mdi-check-circle'" size="small" class="list-icon" v-if="description.trim() !== ''" />
                  <span class="list-text">{{ description }}</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-8">
        <v-btn size="small" to="/services" color="primary" append-icon="mdi-eye" variant="outlined">
          Ver todos Serviços
        </v-btn>
      </v-row>

    </div>
  </div>
</template>

<style scoped>
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
