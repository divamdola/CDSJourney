import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useAnimationDebug } from './AnimationDebug';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  triggerThreshold?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
  triggerThreshold = 0.3
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { debug } = useAnimationDebug();
  const isInView = useInView(ref, { once: true, amount: triggerThreshold });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0
  });

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.round(latest).toLocaleString());
    });
    
    if (isInView && !hasAnimated) {
      motionValue.set(value);
      setHasAnimated(true);
    }
    
    return unsubscribe;
  }, [isInView, motionValue, value, duration, spring, hasAnimated]);

  if (debug) {
    return (
      <span ref={ref} className={className} style={{ position: 'relative' }}>
        {prefix}{displayValue}{suffix}
        <span style={{
          position: 'absolute',
          top: '-20px',
          left: 0,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '2px 6px',
          fontSize: '10px',
          borderRadius: '2px'
        }}>
          InView: {isInView.toString()} | Animated: {hasAnimated.toString()}
        </span>
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};