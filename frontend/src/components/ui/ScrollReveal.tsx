import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useAnimationDebug } from './AnimationDebug';

interface ScrollRevealProps {
  children: ReactNode;
  yFrom?: number;
  yTo?: number;
  opacityFrom?: number;
  opacityTo?: number;
  className?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  yFrom = 20,
  yTo = 0,
  opacityFrom = 0,
  opacityTo = 1,
  className = '',
  stiffness = 100,
  damping = 25,
  mass = 0.3
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { debug } = useAnimationDebug();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [yFrom, yTo]),
    { stiffness, damping, mass }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [opacityFrom, opacityTo]),
    { stiffness, damping, mass }
  );

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      {debug && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '4px 8px',
          fontSize: '10px',
          zIndex: 1000,
          pointerEvents: 'none'
        }}>
          Y: {y.get().toFixed(1)}px | Opacity: {opacity.get().toFixed(2)} | Progress: {scrollYProgress.get().toFixed(2)}
        </div>
      )}
      <motion.div
        initial={{ y: yFrom, opacity: opacityFrom }}
        style={{ y, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
};