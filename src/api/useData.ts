export type Data = {
  category: string,
  score: number,
  icon: string,
  color: string,
}

export const useData = () => createRouteData<Data[]>(() => [
  {
    category: 'Reaction',
    score:    80,
    icon:     '/icons/icon-reaction.svg',
    color:    '#E14F57',
  },
  {
    category: 'Memory',
    score:    92,
    icon:     '/icons/icon-memory.svg',
    color:    '#E8B545',
  },
  {
    category: 'Verbal',
    score:    61,
    icon:     '/icons/icon-verbal.svg',
    color:    '#2BB691',
  },
  {
    category: 'Visual',
    score:    72,
    icon:     '/icons/icon-visual.svg',
    color:    '#4644CE',
  },
]);
