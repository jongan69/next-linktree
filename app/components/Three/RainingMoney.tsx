import React, { useEffect, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { TextureLoader } from 'three';

function MoneyBill({ texture }: { texture: any | null }) {
  const mesh = useRef<any>(null);
  const [position, setPosition] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    setPosition([
      Math.random() * 5 - 2.5,
      Math.random() * 5,
      Math.random() * 5 - 2.5
    ]);
    setRotation([
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ]);
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.y -= 0.02;
      if (mesh.current.position.y < -5) {
        mesh.current.position.y = 5;
      }
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <planeGeometry args={[0.5, 0.25]} />
      <meshBasicMaterial args={[{ map: texture, transparent: true }]} />
    </mesh>
  );
}

export default function RainingMoneyBackground() {
  const moneyTexture = useLoader(TextureLoader, '/moneyTexture.png');
  const billsCount = 200;

  return (
    <>
      {Array.from({ length: billsCount }).map((_, i) => (
        <MoneyBill key={i} texture={moneyTexture} />
      ))}
    </>
  );
}