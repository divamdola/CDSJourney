import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero_wrapper-image.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  } as const;

  const floatVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + (i * 0.1),
        type: 'spring' as const,
        stiffness: 200,
        damping: 15
      }
    })
  } as const;

  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  } as const;

  return (
    <section className="hero">
      <motion.div 
        className="container hero__container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__content">
          <motion.p 
            className="label text-accent hero__eyebrow"
            variants={itemVariants}
          >
            Learning Today
          </motion.p>
          
          <motion.h1 
            className="hero__title"
            variants={itemVariants}
            style={{ fontWeight: 'bold' }}
          >
            सर नीचे और बस अपनी मेहनत
          </motion.h1>

          <motion.p 
            className="hero__description"
            variants={itemVariants}
          >
            Bharat's Most loved defence page
          </motion.p>
          
          <motion.div 
            className="hero__cta"
            variants={itemVariants}
          >
            <Link to="/courses" className="btn btn--primary">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="hero__visual"
          variants={visualVariants}
        >
          <div className="hero__image-wrapper">
            <img
              src={heroImage}
              alt="Hero image"
              className="hero__image"
            />
          </div>
          
          {/* Floating Stat Cards */}
          <motion.div 
            className="hero__stats"
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="hero__stat-card"
              custom={0}
              variants={floatVariants}
            >
              <span className="statistic">450+</span>
              <span className="label">Courses</span>
            </motion.div>
            <motion.div 
              className="hero__stat-card"
              custom={1}
              variants={floatVariants}
            >
              <span className="statistic">230+</span>
              <span className="label">Mentors</span>
            </motion.div>
            <motion.div 
              className="hero__stat-card"
              custom={2}
              variants={floatVariants}
            >
              <span className="statistic">56,700+</span>
              <span className="label">Learners</span>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div 
            className="hero__decorative"
            variants={decorativeVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.div 
            className="hero__decorative-2"
            variants={decorativeVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;