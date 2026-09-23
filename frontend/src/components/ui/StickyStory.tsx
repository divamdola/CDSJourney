import { useScroll, useTransform, useSpring, motion } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { useAnimationDebug } from './AnimationDebug';

interface StickyStoryProps {
  children: ReactNode;
  height?: string;
  scaleFrom?: number;
  scaleTo?: number;
  yFrom?: number;
  yTo?: number;
  className?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export const StickyStory: React.FC<StickyStoryProps> = ({
  children,
  height = '150vh',
  scaleFrom = 0.94,
  scaleTo = 1.08,
  yFrom = 0,
  yTo = 0,
  className = '',
  stiffness = 100,
  damping = 25,
  mass = 0.3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { debug } = useAnimationDebug();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;

  const adjustedScaleFrom = isMobile ? 0.98 : scaleFrom;
  const adjustedScaleTo = isMobile ? 1.02 : scaleTo;
  const adjustedYFrom = isMobile ? yFrom * 0.5 : yFrom;
  const adjustedYTo = isMobile ? yTo * 0.5 : yTo;

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [adjustedScaleFrom, 1, adjustedScaleTo]),
    { stiffness, damping, mass }
  );

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [adjustedYFrom, 0, adjustedYTo]),
    { stiffness, damping, mass }
  );

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} style={{ height }} className={className}>
        <div ref={stickyRef}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ height }} className={className}>
      {debug && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '8px 16px',
          fontSize: '12px',
          zIndex: 1000,
          pointerEvents: 'none',
          borderRadius: '4px'
        }}>
          Sticky Progress: {scrollYProgress.get().toFixed(2)} | Scale: {scale.get().toFixed(3)}
        </div>
      )}
      <motion.div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          scale,
          y
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};