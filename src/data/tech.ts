export interface Tech {
  id: number
  title: string
  icon: string // agora esse campo é o nome slug usado no CDN da Simple Icons
  color: string
}

export const techFeat: Tech[] = [
  {
    id: 1,
    title: 'Python',
    icon: 'python',
    color: '#3776AB', // Python
  },
  {
    id: 2,
    title: 'Vue.js',
    icon: 'vue.js',
    color: '#4FC08D',
  },
  {
    id: 3,
    title: 'Postgres',
    icon: 'postgresql',
    color: '#336791',
  },
  {
    id: 4,
    title: 'Django',
    icon: 'django',
    color: '#4FC08D',
  },
]

export const techBundle: Tech[] = [
  {
    id: 1,
    title: 'HTML',
    icon: 'html5',
    color: '#E34F26',
  },
  {
    id: 2,
    title: 'CSS',
    icon: 'css3',
    color: '#1572B6',
  },
  {
    id: 3,
    title: 'JavaScript',
    icon: 'javascript',
    color: '#F7DF1E',
  },
  {
    id: 4,
    title: 'Flask',
    icon: 'flask',
    color: '#000000', // Flask usa preto oficialmente
  },
  {
    id: 5,
    title: 'React',
    icon: 'react',
    color: '#61DAFB',
  },
  {
    id: 6,
    title: 'Docker',
    icon: 'docker',
    color: '#61DAFB',
  },
]
