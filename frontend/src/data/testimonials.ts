export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aditya Singh',
    role: 'CDS Aspirant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    text: 'CDSJourney ki mock tests aur study plans ne meri preparation ko bahut organized bana diya. Pehle samajh nahi aata tha kya padhna hai, ab daily targets clear rehte hain.'
  },

  {
    id: '2',
    name: 'Priya Sharma',
    role: 'AFCAT Aspirant',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    text: 'The explanation videos and practice questions are excellent. Especially the English and GK sections helped me improve my score significantly. Highly recommended for serious aspirants.'
  },

  {
    id: '3',
    name: 'Rahul Negi',
    role: 'NDA Aspirant',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    text: 'Sabse achhi baat yeh lagi ki platform par study material aur mock tests ek hi jagah mil gaye. Isse preparation kaafi smooth aur efficient ho gayi.'
  },

  {
    id: '4',
    name: 'Sneha Verma',
    role: 'CAPF Aspirant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    text: 'The mock tests feel very close to the actual exam pattern. Detailed analysis after every test helped me identify weak areas and improve continuously.'
  },

  {
    id: '5',
    name: 'Karan Thapa',
    role: 'CDS Aspirant',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    text: 'Preparation ke dauran motivation maintain karna difficult hota hai, lekin CDSJourney ke mentorship sessions aur community support ne mujhe consistent rehne mein help ki.'
  },

  {
    id: '6',
    name: 'Anjali Rawat',
    role: 'Defence Aspirant',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    text: 'I liked the simple explanations, structured roadmap, and quality study material. The platform saves a lot of time by providing everything in one place.'
  }
];