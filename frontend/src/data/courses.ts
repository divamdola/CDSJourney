export interface Course {
  id: string;
  title: string;
  level: string;
  price: number;
  image: string;
  videoCount: number;
  duration: string;
  category: string;
}

import course1Image from '../assets/courses/INDIA BATCH (PAPER 1+ PAPER 2) CAPF 2027  Rs 7999.webp';
import course2Image from '../assets/courses/INDIA BATCH (PAPER 2) CAPF 2027 Rs 4999.webp';
import course3Image from '../assets/courses/KILO OTA BATCH (CDS-1 2027) Coming Soon.webp';
import course4Image from '../assets/courses/LIMA BATCH (NDA-1 2027) Rs 3299.webp';

export const courses: Course[] = [
  {
    id: '1',
    title: 'INDIA BATCH (PAPER 1+ PAPER 2) CAPF 2027',
    level: 'Live Course',
    price: 7999,
    image: course1Image,
    videoCount: 150,
    duration: '60 hours',
    category: 'CAPF'
  },
  {
    id: '2',
    title: 'INDIA BATCH (PAPER 2) CAPF 2027',
    level: 'Live Course',
    price: 4999,
    image: course2Image,
    videoCount: 120,
    duration: '45 hours',
    category: 'CAPF'
  },
  {
    id: '3',
    title: 'KILO OTA BATCH (CDS-1 2027)',
    level: 'Upcoming Course',
    price: 0,
    image: course3Image,
    videoCount: 100,
    duration: '40 hours',
    category: 'CDS'
  },
  {
    id: '4',
    title: 'LIMA BATCH (NDA-1 2027)',
    level: 'Live Course',
    price: 3299,
    image: course4Image,
    videoCount: 130,
    duration: '50 hours',
    category: 'NDA'
  }
];