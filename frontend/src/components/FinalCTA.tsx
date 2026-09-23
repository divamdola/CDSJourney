import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FinalCTA.css';
import chestImage from '../assets/chest.png';

const FinalCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12
      }
    }
  } as const;

  return (
    <section className="final-cta">
      <motion.div 
        className="final-cta__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="final-cta__content">
          <motion.div className="final-cta__text" variants={itemVariants}>
            <h2>Do You Have It In You?</h2>
            <p>Join thousands of successful candidates who have cracked CDS, AFCAT, NDA, and CAPF exams with our expert guidance and comprehensive courses.</p>
            <div className="final-cta__cta">
              <Link to="/courses" className="btn btn--primary btn--large">
                Start Learning
              </Link>
              <Link to="/contact" className="btn btn--inverse">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div className="final-cta__visual" variants={itemVariants}>
            <div className="final-cta__image-wrapper">
              <img
                src={chestImage}
                alt="Defence aspirant"
                className="final-cta__image"
              />
            </div>
            <div className="final-cta__decorative" />
            <div className="final-cta__decorative-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;