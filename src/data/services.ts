// src/data/feat.ts

export interface Feature {
  id: number
  title: string
  listDescription: string[]
  icon: string
  buttonText: string
  buttonAction: string | (() => void)
  feat?: boolean
  color: string
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: 'Desenvolvimento Full Stack',
    listDescription: [
      'Criação de aplicações web completas com arquitetura moderna',
      'Integração fluida entre frontend (Vue 3, Vite, TypeScript) e backend (Django REST)',
      'Interface responsiva, acessível e com foco em performance e experiência do usuário',
    ],
    icon: 'mdi-code-tags',
    buttonText: 'Ver Projetos',
    buttonAction: '/projects',
    feat: true,
    color: 'purple',
  },
  {
    id: 2,
    title: 'APIs & Integrações',
    listDescription: [
      'Desenvolvimento de APIs RESTful seguras e escaláveis',
      'Integração entre sistemas e bancos de dados (MySQL, PostgreSQL)',
      'Autenticação, permissões e testes automatizados',
    ],
    icon: 'mdi-api',
    buttonText: 'Saiba Mais',
    buttonAction: '/services',
    feat: true,
    color: 'blue',
  },
  {
    id: 3,
    title: 'Automação de Processos',
    listDescription: [
      'Scripts em Python para automação de tarefas empresariais',
      'Extração e tratamento de dados em tempo real',
      'Integração com sensores, sistemas industriais e ferramentas de BI',
    ],
    icon: 'mdi-robot',
    buttonText: 'Consultar',
    buttonAction: '/contact',
    feat: true,
    color: 'orange',
  },
  {
    id: 4,
    title: 'Dashboards & Dados',
    listDescription: [
      'Coleta, limpeza e visualização de dados industriais',
      'Relatórios automatizados e exportação em PDF',
      'Integração com Power BI, Jupyter e Google Colab',
    ],
    icon: 'mdi-chart-line',
    buttonText: 'Ver Soluções',
    buttonAction: '/projects',
    feat: false,
    color: 'yellow',
  },
  {
    id: 5,
    title: 'Deploy & Servidores',
    listDescription: [
      'Configuração e deploy de aplicações em servidores Linux',
      'Containerização com Docker e orquestração de ambientes',
      'Servidores robustos com Gunicorn, Nginx, SSH e supervisão contínua',
    ],
    icon: 'mdi-server',
    buttonText: 'Solicitar Orçamento',
    buttonAction: '/contact',
    feat: false,
    color: 'teal',
  },
  {
    id: 6,
    title: 'Hospedagem de Sites',
    listDescription: [
      'Hospedagem de websites institucionais e landing pages',
      'Configuração de domínios personalizados e certificados SSL',
      'Gerenciamento completo em plataformas como Vercel, Netlify e DigitalOcean',
    ],
    icon: 'mdi-web',
    buttonText: 'Ver Planos',
    buttonAction: '/hosting',
    feat: false,
    color: 'green',
  },
]
