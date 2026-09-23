import { SectionHeading } from './ui/SectionHeading';
import { youtubeVideos } from '../data/youtubeVideos';
import { motion } from 'framer-motion';

const LearningSteps = () => {
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
    <section className="learning-steps">
      <div className="container">
        <SectionHeading
          eyebrow="Free Youtube Classes"
          title="Top 5 most watched live sessions"
        />

        <motion.div 
          className="learning-steps__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {youtubeVideos.map((video) => (
            <motion.a
              key={video.videoId}
              href={video.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="learning-step"
              variants={itemVariants}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="learning-step__rank">#{video.rank}</div>
              <div className="learning-step__thumbnail">
                <img
                  src={video.imageLink}
                  alt={video.title}
                  className="learning-step__image"
                />
                <div className="learning-step__play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              <h3>{video.title}</h3>
              <p className="learning-step__views">
                {video.referenceViews.toLocaleString()} views
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSteps;