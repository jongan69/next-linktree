import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { isWebGLAvailable } from '../../utils/checkGL';

// Dynamically import both Canvas and RainingMoney with SSR disabled
const Canvas = dynamic(
  () => import('@react-three/fiber').then(mod => mod.Canvas),
  { ssr: false }
)

const RainingMoneyBackground = dynamic(
  () => import('./RainingMoney'),
  { ssr: false }
)

export default function Background() {
  const [hasWebGL, setHasWebGL] = useState(true);
  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }
    }>
      {hasWebGL ? <Canvas>
        < RainingMoneyBackground />
      </Canvas> : (< div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-600 opacity-30" />)
      }
    </div>
  );
} 