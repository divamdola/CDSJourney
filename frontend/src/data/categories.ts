export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  courseCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Build modern websites and applications',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    courseCount: 45
  },
  {
    id: '2',
    name: 'Data Science',
    description: 'Analyze data and build ML models',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    courseCount: 32
  },
  {
    id: '3',
    name: 'Design',
    description: 'Create stunning visual experiences',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    courseCount: 28
  },
  {
    id: '4',
    name: 'Marketing',
    description: 'Grow your business with digital marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    courseCount: 24
  },
  {
    id: '5',
    name: 'Business',
    description: 'Develop essential business skills',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
    courseCount: 38
  }
];