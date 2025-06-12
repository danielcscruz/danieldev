import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useHeroVisibilityStore = defineStore('heroVisibility', () => {
  const isHeroVisible = ref(true)
  const currentRoute = ref('/')

  const setHeroVisibility = (visible: boolean) => {
    isHeroVisible.value = visible
  }

  const setCurrentRoute = (route: string) => {
    currentRoute.value = route
  }

  // Computed para determinar se a logo deve aparecer
  const shouldShowLogo = computed(() => {
    // Se não estamos na homepage, sempre mostra a logo
    if (currentRoute.value !== '/') {
      return true
    }
    // Se estamos na homepage, mostra logo apenas quando hero não está visível
    return !isHeroVisible.value
  })

  const resetForNewRoute = (newRoute: string) => {
    currentRoute.value = newRoute
    // Se não é a homepage, força hero como não visível (logo aparece)
    if (newRoute !== '/') {
      isHeroVisible.value = false
    } else {
      // Se voltou para homepage, reseta para hero visível
      isHeroVisible.value = true
    }
  }

  return {
    isHeroVisible,
    currentRoute,
    shouldShowLogo,
    setHeroVisibility,
    setCurrentRoute,
    resetForNewRoute,
  }
})
