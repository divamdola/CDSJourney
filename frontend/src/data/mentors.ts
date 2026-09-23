export interface Mentor {
  id: string;
  name: string;
  displayName: string;
  image: string;
  expertise: string;
}

import anuragImage from '../assets/anurag sir.png';
import brarImage from '../assets/brar sir.png';
import poojaImage from '../assets/Pooja maam.png';

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Anurag Tripathi',
    displayName: 'Anurag Sir',
    image: anuragImage,
    expertise: 'General Studies'
  },
  {
    id: '2',
    name: 'Sandeep Singh Brar',
    displayName: 'Brar Sir',
    image: brarImage,
    expertise: 'Mathematics'
  },
  {
    id: '3',
    name: 'Pooja Maam',
    displayName: 'Pooja Maam',
    image: poojaImage,
    expertise: 'English and Vocabulary'
  }
];