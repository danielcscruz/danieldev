export interface Tech {
  id: number
  title: string
  icon: string
  color: string
}

export const techFeat: Tech[] = [
  {
    id: 1,
    title: 'Python/Django',
    icon: 'mdi-language-python',
    color: 'yellow',
  },
  {
    id: 2,
    title: 'Vue.js',
    icon: 'mdi-vuejs',
    color: 'green',
  },
  {
    id: 3,
    title: 'Postgres',
    icon: 'mdi-database',
    color: 'purple',
  },
  {
    id: 4,
    title: 'AWS/Docker',
    icon: 'mdi-cloud',
    color: 'blue',
  },
]
