// src/data/projects.ts

export interface Project {
  id: number
  title: string
  description: string
  detail: string
  category: string
  tags: string[]
  feat?: boolean
  year: string
  link: string
  github: string
  private?: boolean
  image: string
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'Prosa',
    description:
      'Microblog com Django REST no backend e Vue.js no frontend, incluindo autenticação, feed e interações',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'full-stack',
    tags: ['vue.js', 'django-rest'],
    feat: true,
    year: '2025',
    link: 'https://prosa.codan.tech',
    github: 'https://github.com/danielcscruz/prosa-frontend',
    private: false,
    image: 'prosa.jpg',
  },
  {
    id: 2,
    title: 'The Periodic Tetris',
    description:
      'Jogo de Tetris com substâncias químicas. Feito em Vue.js com gerenciamento de estado utilizando Pinia',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'front-end',
    tags: ['vue.js'],
    feat: true,
    year: '2025',
    link: 'https://periodic-tetris-codan.vercel.app',
    github: 'https://github.com/danielcscruz/the-periodic-game',
    private: false,
    image: 'periodic.jpg',
  },
  {
    id: 3,
    title: 'MDR',
    description:
      'Protótipo Frontend de funcionamento de Refinamento de Macrodados baseado na série Ruptura',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'front-end',
    tags: ['react', 'javascript'],
    feat: false,
    year: '',
    link: 'https://mdr-macrodata-refinement-dan.vercel.app',
    github: 'https://github.com/danielcscruz/mdr-macrodata-refinement',
    private: false,
    image: '',
  },
  {
    id: 4,
    title: 'Bookstore',
    description: 'API para gestão de ordens de compra para uma livraria',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'back-end',
    tags: ['api', 'django', 'docker', 'python'],
    feat: true,
    year: '2024',
    link: '',
    github: 'https://github.com/danielcscruz/bookstore',
    private: true,
    image: '',
  },
  {
    id: 5,
    title: 'eFood',
    description: 'Protótipo Frontend de app para realizar pedidos de restaurante',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'front-end',
    tags: ['react', 'typescript', 'redux'],
    feat: false,
    year: '2024',
    link: 'https://efood-three-tan.vercel.app',
    github: 'https://github.com/danielcscruz/efood',
    private: false,
    image: '',
  },
  {
    id: 6,
    title: 'Trafficount',
    description:
      'Script utilizando IA para contar carros em vídeo de monitoramento de transito fornecido pelo usuário',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce nec augue a libero feugiat gravida. Integer vel sapien in lacus convallis fermentum. Donec sed tortor a lorem.',
    category: 'ia',
    tags: ['python', 'yolov5'],
    feat: true,
    year: '2024',
    link: '',
    github: 'https://github.com/danielcscruz/trafficount',
    private: false,
    image: '',
  },
  {
    id: 7,
    title: '',
    description: '',
    detail: '',
    category: '',
    tags: [],
    feat: false,
    year: '',
    link: '',
    github: '',
    private: false,
    image: '',
  },
  {
    id: 8,
    title: '',
    description: '',
    detail: '',
    category: '',
    tags: [],
    feat: false,
    year: '',
    link: '',
    github: '',
    private: false,
    image: '',
  },
  {
    id: 9,
    title: '',
    description: '',
    detail: '',
    category: '',
    tags: [],
    feat: false,
    year: '',
    link: '',
    github: '',
    private: false,
    image: '',
  },
  {
    id: 10,
    title: '',
    description: '',
    detail: '',
    category: '',
    tags: [],
    feat: false,
    year: '',
    link: '',
    github: '',
    private: false,
    image: '',
  },
]
