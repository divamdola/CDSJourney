export interface Mentor {
  id: string;
  name: string;
  displayName: string;
  image: string;
  expertise: string;
}

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Anurag Tripathi',
    displayName: 'Anurag Sir',
    image: '/src/assets/anurag sir.png',
    expertise: 'General Studies'
  },
  {
    id: '2',
    name: 'Sandeep Singh Brar',
    displayName: 'Brar Sir',
    image: '/src/assets/brar sir.png',
    expertise: 'Mathematics'
  },
  {
    id: '3',
    name: 'Pooja Maam',
    displayName: 'Pooja Maam',
    image: '/src/assets/Pooja maam.png',
    expertise: 'English and Vocabulary'
  }
];