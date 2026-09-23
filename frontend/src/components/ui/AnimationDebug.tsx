import { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationDebugContextType {
  debug: boolean;
  setDebug: (debug: boolean) => void;
}

const AnimationDebugContext = createContext<AnimationDebugContextType>({
  debug: false,
  setDebug: () => {}
});

export const useAnimationDebug = () => useContext(AnimationDebugContext);

export const AnimationDebugProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [debug, setDebug] = useState(false);

  return (
    <AnimationDebugContext.Provider value={{ debug, setDebug }}>
      {children}
      {debug && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.9)',
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          fontSize: '12px',
          zIndex: 9999,
          fontFamily: 'monospace',
          cursor: 'pointer',
          border: '1px solid #333'
        }} onClick={() => setDebug(false)}>
          <div>Animation Debug Mode Active</div>
          <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '4px' }}>Click to disable</div>
        </div>
      )}
    </AnimationDebugContext.Provider>
  );
};

export const AnimationDebugToggle: React.FC = () => {
  const { debug, setDebug } = useAnimationDebug();

  return (
    <button
      onClick={() => setDebug(!debug)}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: debug ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)',
        color: debug ? 'white' : 'black',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '11px',
        zIndex: 9999,
        fontFamily: 'monospace',
        border: '1px solid #ccc',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
    >
      {debug ? 'Debug ON' : 'Debug OFF'}
    </button>
  );
};