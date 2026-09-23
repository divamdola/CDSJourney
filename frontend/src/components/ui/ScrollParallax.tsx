import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useAnimationDebug } from './AnimationDebug';

interface ScrollParallaxProps {
  children: ReactNode;
  yFrom?: number;
  yTo?: number;
  speed?: number;
  className?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  yFrom = -10,
  yTo = 10,
  speed = 1,
  className = '',
  stiffness = 100,
  damping = 25,
  mass = 0.3
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { debug } = useAnimationDebug();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [yFrom * speed, yTo * speed]),
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
          Y: {y.get().toFixed(1)}px | Progress: {scrollYProgress.get().toFixed(2)}
        </div>
      )}
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};