import { timelineEvents, TimelineEvent } from '../data/timeline';
import { useEffect, useState, useRef } from 'react';

const getIconSVG = (iconName?: string) => {
  const icons: Record<string, JSX.Element> = {
    'flag': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    ),
    'users': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    'book': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    'award': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    'plane': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20"></path>
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path>
        <path d="M12 2v10"></path>
        <path d="M12 12l-4-4"></path>
        <path d="M12 12l4-4"></path>
      </svg>
    ),
    'shield': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    'badge': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"></path>
      </svg>
    ),
    'trophy': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
        <path d="M4 22h16"></path>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
      </svg>
    ),
    'rocket': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
    'target': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    'graduation-cap': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
    'medal': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    )
  };
  return icons[iconName || 'target'];
};

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
  isVisible: boolean;
  isActive: boolean;
}

const TimelineCard = ({ event, index, isLeft, isVisible, isActive }: TimelineCardProps) => {
  return (
    <div 
      className={`timeline__card ${event.highlight ? 'timeline__card--highlight' : ''} ${isActive ? 'timeline__card--active' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0) translateY(0) scale(1)' : 
                   isLeft ? 'translateX(-40px) translateY(10px) scale(0.97)' : 
                   'translateX(40px) translateY(10px) scale(0.97)',
        transition: 'opacity 600ms cubic-bezier(0.215, 0.61, 0.355, 1), transform 600ms cubic-bezier(0.215, 0.61, 0.355, 1)'
      }}
    >
      <div className="timeline__connector" />
      
      {event.image && (
        <div className="timeline__card-image">
          <img src={event.image} alt={event.title} loading="lazy" />
        </div>
      )}
      
      <div 
        className="timeline__card-header"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: `opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 100ms, transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 100ms`
        }}
      >
        <span className="timeline__year">{event.year}</span>
        <span className="timeline__label">{event.label}</span>
      </div>
      
      <h3 className="timeline__card-title">{event.title}</h3>
      <p className="timeline__card-description">{event.description}</p>
      
      {event.stat && (
        <div className="timeline__stat">
          <span className="timeline__stat-value">{event.stat}</span>
        </div>
      )}
      
      {event.cta && (
        <a href={event.cta.link} className="timeline__cta">
          {event.cta.text}
        </a>
      )}
    </div>
  );
};

const TimelineMarker = ({ icon, highlight, isActive }: { icon?: string; highlight?: boolean; isActive: boolean }) => {
  return (
    <div 
      className={`timeline__marker ${highlight ? 'timeline__marker--highlight' : ''} ${isActive ? 'timeline__marker--active' : ''}`}
      style={{
        transform: isActive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0.75)',
        transition: 'transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1)'
      }}
    >
      <div 
        className="timeline__marker-icon"
        style={{
          opacity: isActive ? 1 : 0.5,
          transition: 'opacity 400ms cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}
      >
        {getIconSVG(icon)}
      </div>
      <div 
        className="timeline__marker-ring"
        style={{
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
          transition: 'opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 150ms, transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 150ms'
        }}
      />
    </div>
  );
};

const TimelineItem = ({ event, index, isVisible, isActive }: { event: TimelineEvent; index: number; isVisible: boolean; isActive: boolean }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}>
      <TimelineCard event={event} index={index} isLeft={isLeft} isVisible={isVisible} isActive={isActive} />
      <TimelineMarker icon={event.icon} highlight={event.highlight} isActive={isActive} />
    </div>
  );
};

const Timeline = () => {
  const [progress, setProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [activeItem, setActiveItem] = useState<number>(-1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress calculation
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      
      const scrolled = scrollTop - elementTop + windowHeight / 2;
      const progress = Math.max(0, Math.min(1, scrolled / elementHeight));
      
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  // IntersectionObserver for scroll reveal
  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleItems(new Set(timelineEvents.map((_, i) => i)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Active item calculation based on scroll position
  useEffect(() => {
    if (prefersReducedMotion) {
      setActiveItem(timelineEvents.length - 1);
      return;
    }

    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      
      let closestIndex = -1;
      let closestDistance = Infinity;

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const itemRect = ref.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveItem(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  return (
    <section className="timeline" aria-label="CDSJourney Timeline">
      <div className="timeline__background-decoration" />
      <div className="container">
        <header className="timeline__header">
          <p className="timeline__eyebrow">CDSJourney</p>
          <h2 className="timeline__title">Our Journey</h2>
          <p className="timeline__subtitle">From humble beginnings to shaping the future of defence aspirants</p>
        </header>
        
        <div ref={timelineRef} className="timeline__container">
          <div className="timeline__line">
            <div 
              className="timeline__line-progress" 
              style={{ height: `${progress * 100}%` }}
              aria-hidden="true"
            />
          </div>
          <div className="timeline__items">
            {timelineEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="timeline__item-wrapper"
              >
                <TimelineItem 
                  event={event} 
                  index={index} 
                  isVisible={visibleItems.has(index)} 
                  isActive={index <= activeItem}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
