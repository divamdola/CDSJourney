import { useEffect } from 'react';

const ElfsightTimeline = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="elfsight-timeline">
      <div className="container">
        <div className="elfsight-app-19f01d46-957e-40fc-9a84-f5bce2715d85" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default ElfsightTimeline;
