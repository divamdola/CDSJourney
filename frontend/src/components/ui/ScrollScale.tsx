import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useAnimationDebug } from './AnimationDebug';

interface ScrollScaleProps {
  children: ReactNode;
  scaleFrom?: number;
  scaleTo?: number;
  yFrom?: number;
  yTo?: number;
  opacityFrom?: number;
  opacityTo?: number;
  className?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export const ScrollScale: React.FC<ScrollScaleProps> = ({
  children,
  scaleFrom = 0.96,
  scaleTo = 1.04,
  yFrom = 0,
  yTo = 0,
  opacityFrom = 1,
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
    offset: ['start end', 'end start']
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [scaleFrom, 1, scaleTo]),
    { stiffness, damping, mass }
  );

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [yFrom, 0, yTo]),
    { stiffness, damping, mass }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [opacityFrom, 1, opacityTo]),
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
          Scale: {scale.get().toFixed(3)} | Y: {y.get().toFixed(1)}px | Progress: {scrollYProgress.get().toFixed(2)}
        </div>
      )}
      <motion.div
        style={{
          scale,
          y,
          opacity
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};