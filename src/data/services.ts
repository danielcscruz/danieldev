// src/data/feat.ts

export interface Feature {
  id: number
  title: string
  listDescription: string[]
  icon: string
  buttonText: string
  buttonAction: string | (() => void)
  feat?: boolean
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Desenvolvimento Full Stack',
    listDescription: [
      'Desenvolvimento de aplicações web de acordo com a sua necessidade',
      'Front End moderno com design responsivo',
      'Back End robusto com arquitetura segura',
    ],
    icon: 'mdi-code-tags',
    buttonText: 'Ver Projetos',
    buttonAction: '/projects',
    feat: true,
  },
  {
    id: 2,
    title: 'APIs & Integrações',
    listDescription: ['Desenvolvimento de APIs REST', '', ''],
    icon: 'mdi-api',
    buttonText: 'Saiba Mais',
    buttonAction: '/services',
    feat: true,
  },
  {
    id: 3,
    title: 'Automação',
    listDescription: [
      'Scripts e sistemas de automação personalizados para otimizar processos empresariais e aumentar a produtividade.',
      '',
      '',
    ],
    icon: 'mdi-robot',
    buttonText: 'Consultar',
    buttonAction: '/contact',
    feat: true,
  },
]

// Função helper para obter uma feature específica
export const getFeatureById = (id: number): Feature | undefined => {
  return featuresData.find((feature) => feature.id === id)
}

// Função helper para obter features em destaque
export const getHighlightedFeatures = (): Feature[] => {
  return featuresData.filter((feature) => feature.feat)
}
