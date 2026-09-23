import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const faqs = [
  {
    id: 1,
    question: 'What is CDSJourney?',
    answer: 'CDSJourney is Indias most loved platform for Defence Exams, providing expert guidance for CDS, AFCAT, NDA, and CAPF preparation.'
  },
  {
    id: 2,
    question: 'Are the courses self-paced?',
    answer: 'Yes! You can learn at your own pace with lifetime access to all purchased courses.'
  },
  {
    id: 3,
    question: 'Do I get a certificate after completing a course?',
    answer: 'Absolutely. You\'ll receive a digital certificate upon finishing each course.'
  },
  {
    id: 4,
    question: 'Can I access the courses on mobile devices?',
    answer: 'Yes, all courses are fully optimized for mobile and tablet viewing.'
  },
  {
    id: 5,
    question: 'Who are the mentors on CDSJourney?',
    answer: 'Our mentors include Anurag Bhaiya and Pooja Maam, who are experts in defence exam preparation with years of experience in guiding students to success.'
  },
  {
    id: 6,
    question: 'What payment methods are accepted?',
    answer: 'We support various payment options including credit/debit cards and digital wallets, depending on your region.'
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
    hidden: { opacity: 0, y: 20 },
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
    <section className="faq">
      <div className="container">
        <SectionHeading
          eyebrow="Frequently Asked"
          title="Questions"
          description="Find quick answers to common questions about CDSJourney, our courses, learning process, and platform features."
        />

        <motion.div 
          className="faq__container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq) => (
            <motion.div 
              key={faq.id} 
              className="faq-item"
              aria-expanded={openId === faq.id}
              variants={itemVariants}
            >
              <button
                className="faq-item__question"
                onClick={() => toggle(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <span className="faq-item__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path
                      d="M6 9l6 6 6-6"
                      animate={{ rotate: openId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-item__answer"
                  >
                    <div className="faq-item__answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;