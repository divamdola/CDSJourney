import { SectionHeading } from './ui/SectionHeading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    category: 'Exam Tips',
    date: 'Jan 15, 2025',
    title: '10 Proven Strategies to Crack CDS Exam in First Attempt',
    excerpt: 'Discover the most effective preparation strategies that have helped thousands of candidates crack the CDS exam on their first try.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    category: 'Study Plan',
    date: 'Jan 10, 2025',
    title: 'Complete 90-Day Study Plan for AFCAT Preparation',
    excerpt: 'A comprehensive day-by-day study schedule covering all important topics and practice tests for AFCAT aspirants.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    category: 'Success Stories',
    date: 'Jan 5, 2025',
    title: 'From Classroom to Defence Forces: A Journey of Determination',
    excerpt: 'Read the inspiring story of Rahul who cracked NDA exam after 3 attempts and is now serving as a Lieutenant.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
  }
];

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="blog">
      <div className="blog__container">
        <SectionHeading
          eyebrow="Latest Insights"
          title="From Our Blog"
          description="Stay updated with exam tips, study strategies, and success stories from defence exam aspirants."
        />

        <motion.div 
          className="blog__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="blog-card"
              variants={itemVariants}
            >
              <div className="blog-card__image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card__image"
                />
              </div>
              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__category">{post.category}</span>
                  <span className="blog-card__date">{post.date}</span>
                </div>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="blog-card__cta">
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
