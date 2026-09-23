import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about__image-wrapper.png';

const About = () => {
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

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      text: 'CDS/NDA GS & GK (Polity, History, Science)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
          <path d="M18 14h-8"></path>
          <path d="M15 18h-5"></path>
          <path d="M10 6h8v4h-8V6Z"></path>
        </svg>
      ),
      text: 'Daily Defence Current Affairs'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      text: 'English Grammar & PYQ Practice'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      text: 'Free Mock Tests & Notes'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      text: 'SSB Interview Guidance'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
      text: 'Motivational Stories'
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <motion.div 
          className="about__container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="about__visual"
            variants={itemVariants}
          >
            <div className="about__image-wrapper">
              <img
                src={aboutImage}
                alt="About CDSJourney"
                className="about__image"
              />
            </div>
            <div className="about__decorative" />
            <div className="about__decorative-2" />
          </motion.div>

          <motion.div 
            className="about__content"
            variants={itemVariants}
          >
            <p className="about__eyebrow">About CDSJourney</p>
            <h2 className="about__title">
              We will work hard. We will earn the uniform. जय हिन्द!
            </h2>
            <p className="about__description">
              With 12 All India Ranks in 4 years, we guide you to clear CDS & wear the uniform with pride.
            </p>
            <ul className="about__features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="about__feature-icon">{feature.icon}</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <p className="about__description">
              Whether aiming for IMA, OTA, NDA, AFCAT or SSB, find daily motivation & practical strategies to clear exams on the first attempt.
            </p>
            <p className="about__description about__description--highlight">
              We prepare officers, not just aspirants. Start your disciplined CDS journey now.
            </p>
            <div className="about__cta">
              <Link to="/courses" className="btn btn--primary">
                Explore Our Courses
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
