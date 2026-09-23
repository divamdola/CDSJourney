export interface TimelineEvent {
  year: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  stat?: string;
  icon?: string;
  cta?: {
    text: string;
    link: string;
  };
  highlight?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2020",
    label: "FOUNDATION",
    title: "CDSJourney Begins",
    description:
      "CDSJourney was started with a simple mission — to make defence-exam preparation more structured, accessible, and result-oriented for aspirants across India.",
    stat: "1 Mission",
    icon: "flag",
    highlight: true
  },

  {
    year: "2020",
    label: "FIRST STUDENTS",
    title: "The First Batch Begins",
    description:
      "Our first group of dedicated defence aspirants joined the journey, building the foundation of a growing learning community focused on CDS preparation.",
    stat: "250+ Students",
    icon: "users"
  },

  {
    year: "2021",
    label: "COURSES",
    title: "Structured Learning Introduced",
    description:
      "CDSJourney introduced structured courses, subject-wise study material, practice resources, and a systematic preparation approach for defence examinations.",
    stat: "10+ Courses",
    icon: "book"
  },

  {
    year: "2021",
    label: "CDS RESULTS",
    title: "First Written Success Stories",
    description:
      "The first batch of students began achieving success in the CDS written examination, motivating us to strengthen our courses, practice material, and guidance.",
    stat: "75+ Written Qualified",
    icon: "award",
    highlight: true
  },

  {
    year: "2022",
    label: "EXPANSION",
    title: "AFCAT Preparation Added",
    description:
      "Preparation expanded beyond CDS with dedicated AFCAT resources, helping aspirants prepare for another major pathway into the Indian Air Force.",
    stat: "1,000+ Learners",
    icon: "plane"
  },

  {
    year: "2022",
    label: "NDA PREPARATION",
    title: "NDA-Focused Learning",
    description:
      "Dedicated NDA preparation modules were introduced for young aspirants, covering core subjects, practice questions, mock tests, and examination strategy.",
    stat: "20+ Study Modules",
    icon: "shield"
  },

  {
    year: "2023",
    label: "CAPF PREPARATION",
    title: "CAPF Courses & Mock Tests",
    description:
      "CDSJourney expanded its defence-exam ecosystem with CAPF preparation, combining structured courses, practice resources, and realistic mock tests.",
    stat: "5,000+ Learners",
    icon: "badge"
  },

  {
    year: "2023",
    label: "COMMUNITY",
    title: "A Growing Defence Community",
    description:
      "Thousands of aspirants became part of the CDSJourney community, sharing preparation experiences, strategies, resources, and motivation.",
    stat: "10,000+ Community",
    icon: "users"
  },

  {
    year: "2024",
    label: "RESULTS",
    title: "More Aspirants Move Forward",
    description:
      "Students across CDS, AFCAT, NDA, and CAPF continued to achieve important milestones in their preparation, written examinations, and selection journeys.",
    stat: "300+ Written Qualified",
    icon: "trophy",
    highlight: true
  },

  {
    year: "2025",
    label: "ECOSYSTEM",
    title: "Building a Complete Preparation Platform",
    description:
      "CDSJourney evolved into a broader defence-exam preparation ecosystem bringing together courses, mock tests, study material, mentorship, results, and community support.",
    stat: "25,000+ Learners",
    icon: "rocket",
    highlight: true
  },

  {
    year: "2026",
    label: "THE JOURNEY CONTINUES",
    title: "Preparing the Next Generation",
    description:
      "With a growing learning community and an expanding digital platform, CDSJourney continues to help defence aspirants prepare smarter, stay consistent, and move closer to their goals.",
    stat: "30,000+ Aspirants",
    icon: "target",
    highlight: true
  }
];