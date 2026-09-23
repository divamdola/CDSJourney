import { SectionHeading } from './ui/SectionHeading';
import { mentors } from '../data/mentors';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Mentors = () => {
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
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="mentors">
      <div className="container">
        <SectionHeading
          eyebrow="Favorite Mentors"
          title="from Our Community"
          description="Meet top-tier mentors ready to guide your learning journey with hands-on knowledge and industry experience."
        />

        <motion.div 
          className="mentors__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mentors.map((mentor: any) => (
            <motion.div 
              key={mentor.id} 
              className="mentor-card"
              variants={itemVariants}
            >
              <div className="mentor-card__image-wrapper">
                <img
                  src={mentor.image}
                  alt={mentor.displayName}
                  className="mentor-card__image"
                />
              </div>
              <div className="mentor-card__content">
                <h3 className="mentor-card__name">{mentor.displayName}</h3>
                <p className="mentor-card__expertise">{mentor.expertise}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mentors__cta">
          <Link to="/mentors" className="btn btn--outline">
            View All Mentors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mentors;