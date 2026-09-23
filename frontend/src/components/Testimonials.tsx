import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);
  const currentTestimonial = testimonials[page % testimonials.length];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg key={index} viewBox="0 0 24 24" fill={index < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Student Success Stories"
          title="Discover how CDSJourney has helped them crack defence exams and achieve their dreams"
        />

        <div className="testimonials__carousel">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="testimonial-card"
            >
              <div className="testimonial-card__quote">"</div>
              <div className="testimonial-card__rating">
                {renderStars(5)}
              </div>
              <div className="testimonial-card__text">
                {currentTestimonial.text}
              </div>
              <div className="testimonial-card__author">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__info">
                  <h4>{currentTestimonial.name}</h4>
                  <p>{currentTestimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button
              className="testimonials__control"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_: any, index: number) => (
                <button
                  key={index}
                  className={`testimonials__dot ${index === page % testimonials.length ? 'active' : ''}`}
                  onClick={() => setPage([index, index > page % testimonials.length ? 1 : -1])}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="testimonials__control"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;