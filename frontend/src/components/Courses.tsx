import { SectionHeading } from './ui/SectionHeading';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="courses">
      <div className="container">
        <SectionHeading
          eyebrow="OUR BATCHES"
          title="&ldquo;The efforts you make today pave the way for tomorrow's success.&rdquo;"
        />

        <motion.div 
          className="courses__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course: any) => (
            <motion.div 
              key={course.id} 
              className="course-card"
              variants={itemVariants}
            >
              <div className="course-card__image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card__image"
                />
                <span className="course-card__badge">{course.level}</span>
                <div className="course-card__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  4.8
                </div>
              </div>
              <div className="course-card__content">
                <h3>{course.title}</h3>
                <div className="course-card__meta">
                  <div className="course-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    {course.videoCount} Lessons
                  </div>
                  <div className="course-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {course.duration}
                  </div>
                  <div className="course-card__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    1.2k Students
                  </div>
                </div>
                <div className="course-card__footer">
                  <span className="course-card__price">{course.price > 0 ? `₹${course.price}` : 'Coming Soon'}</span>
                  <Link to={`/courses/${course.id}`} className="course-card__cta">
                    {course.price > 0 ? 'Enroll' : 'Notify Me'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="courses__cta">
          <Link to="/courses" className="btn btn--outline">
            More Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;