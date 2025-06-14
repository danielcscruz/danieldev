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
      'Aplicação full stack com Vue.js, Django REST e PostgreSQL, com autenticação, feed e interações sociais',
    detail:
      'Microblog inspirado no Twitter com sistema de autenticação JWT, criação de posts, curtidas, repostagens, seguidores e edição de perfil. Desenvolvido com Django REST Framework no backend, PostgreSQL como banco de dados relacional, armazenamento de mídia com AWS S3 e frontend com Vue 3, TypeScript e Vite. Projeto com arquitetura modular, integração via API RESTful, responsivo e escalável.',

    category: 'full-stack',
    tags: ['vue.js', 'django-rest'],
    feat: true,
    year: '2025',
    link: 'https://prosa.codan.tech',
    github: 'https://github.com/danielcscruz/prosa-frontend',
    private: false,
    image: 'prosa.png',
  },
  {
    id: 2,
    title: 'The Periodic Tetris',
    description: 'Jogo educacional em Vue.js com Pinia e TypeScript baseado em reações químicas',
    detail:
      'Jogo estilo Tetris onde blocos representam elementos químicos e reações são pontuadas com base em combinações químicas reais. Desenvolvido com Vue.js 3, TypeScript, Pinia (gerenciamento de estado), HTML5 e CSS3. Utiliza lógica baseada em bitmask para colisões, animações e manipulação de componentes reativos em tempo real.',

    category: 'front-end',
    tags: ['vue.js'],
    feat: true,
    year: '2025',
    link: 'https://periodic-tetris-codan.vercel.app',
    github: 'https://github.com/danielcscruz/the-periodic-game',
    private: false,
    image: 'periodic.png',
  },
  {
    id: 3,
    title: 'MDR',
    description:
      'Protótipo em React que simula o processo de refinamento de macrodados, inspirado na série Severance',
    detail:
      'Projeto experimental que explora interações humanas com dados sensíveis em um ambiente lúdico e surreal. Construído com React, JavaScript moderno (ES6+), gerenciamento de estado local, design orientado à experiência do usuário e princípios de acessibilidade. Layout responsivo com componentes reutilizáveis e lógica de interação baseada em cliques e eventos visuais.',
    category: 'front-end',
    tags: ['react', 'javascript'],
    feat: false,
    year: '',
    link: 'https://mdr-macrodata-refinement-dan.vercel.app',
    github: 'https://github.com/danielcscruz/mdr-macrodata-refinement',
    private: false,
    image: 'mdr.png',
  },
  {
    id: 4,
    title: 'Bookstore',
    description: 'API REST em Django para controle de pedidos e inventário de uma livraria',
    detail:
      'Back-end completo com Django e Django REST Framework para gerenciamento de pedidos, clientes, livros e estoques. Banco de dados PostgreSQL, autenticação segura, testes automatizados com Pytest, deploy com Docker e documentação via Swagger/OpenAPI. Projeto com boas práticas de arquitetura e versionamento com Git.',
    category: 'back-end',
    tags: ['api', 'django', 'docker', 'python'],
    feat: true,
    year: '2024',
    link: '',
    github: 'https://github.com/danielcscruz/bookstore',
    private: true,
    image: 'bookstore.png',
  },
  {
    id: 5,
    title: 'eFood',
    description:
      'Frontend em React com TypeScript e Redux para plataforma de pedidos de restaurante',
    detail:
      'Interface moderna e responsiva para sistema de pedidos, com funcionalidades como listagem de produtos, carrinho de compras, validação de formulário e integração com APIs de pagamento. Desenvolvido com React, TypeScript, Redux, CSS Modules e Vite. Estrutura de componentes reutilizáveis, foco em usabilidade e gerenciamento de estado eficiente.',
    category: 'front-end',
    tags: ['react', 'typescript', 'redux'],
    feat: false,
    year: '2024',
    link: 'https://efood-three-tan.vercel.app',
    github: 'https://github.com/danielcscruz/efood',
    private: false,
    image: 'efood.png',
  },
  {
    id: 6,
    title: 'Trafficount',
    description: 'Script em Python com YOLOv5 para contagem de veículos em vídeos de tráfego',
    detail:
      'Ferramenta automatizada baseada em visão computacional para contagem de carros em vídeos de monitoramento. Utiliza YOLOv5 para detecção de objetos, OpenCV para leitura e manipulação de vídeo, Pandas para análise e exportação de dados e Python puro para automação e lógica de controle. Ideal para análise de tráfego e dados urbanos.',
    category: 'ia',
    tags: ['python', 'yolov5'],
    feat: true,
    year: '2024',
    link: '',
    github: 'https://github.com/danielcscruz/trafficount',
    private: false,
    image: 'trafficount.png',
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
